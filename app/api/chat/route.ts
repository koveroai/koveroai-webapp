import { NextResponse } from 'next/server';

const ROUTEWAY_API_KEY = "sk-3zvrwRIsJuwXD3K622GM-gdT1uAUsEPuPq92pJ8uwUHorrhC-Wz6boCBpDy25trioj7fMME";
// Updated to api.routeway.ai based on DNS resolution and common API patterns
const ROUTEWAY_API_URL = "https://api.routeway.ai/v1/chat/completions";

const SYSTEM_PROMPT = `
You are Kovero AI, an intelligent assistant for a modern TPA (Third Party Administrator) health insurance platform. 
Your role is to assist three types of users:
1. Policyholders (Users): Help with claim status, policy coverage, and finding network hospitals.
2. Hospital Staff: Assist with pre-authorization requests, patient validation, and document submission.
3. TPA Admins: Assist with claim processing, fraud flags, and SLA monitoring.

Tone: Professional, empathetic, and concise.
Rules:
- Do not make up specific claim or policy details if not provided.
- If asked about specific data (like "What is my claim status?"), ask for the Claim ID.
- Keep responses short and helpful.
`;

export async function POST(req: Request) {
    try {
        const { message, history } = await req.json();

        const apiMessages = [
            { role: "system", content: SYSTEM_PROMPT },
            ...(history || []).map((msg: any) => ({
                role: msg.role === 'ai' ? 'assistant' : msg.role,
                content: msg.content
            })),
            // Ensure current message is included if not in history
            // based on frontend check: frontend sends { message: input, history: messages }
            // where 'messages' *excludes* the new input usually.
            // It's safer to append 'message' here as a user message.
            { role: "user", content: message }
        ];

        console.log("Sending request to Routeway API:", ROUTEWAY_API_URL);

        const response = await fetch(ROUTEWAY_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ROUTEWAY_API_KEY}`,
                // Using standard User-Agent, avoiding excessive headers which might flag bot detection
                "User-Agent": "KoveroAI/1.0"
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-instruct:free",
                messages: apiMessages,
                temperature: 0.7,
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Routeway API Error Status:", response.status);
            console.error("Routeway API Error Body:", errorText);
            return NextResponse.json({ response: "I apologize, but I'm having trouble connecting to my AI core right now." });
        }

        const data = await response.json();
        const aiReply = data.choices?.[0]?.message?.content || "I couldn't generate a response.";

        return NextResponse.json({ response: aiReply });

    } catch (error) {
        console.error("Chat API Handler Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
