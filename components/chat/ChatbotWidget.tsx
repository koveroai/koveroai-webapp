"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    role: "user" | "ai";
    content: string;
}

export function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: "1", role: "ai", content: "Hello! I am Kovero AI. How can I assist you with claims or policies today?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);

        try {
            // Call our Next.js API route (Server-Side)
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input, history: messages }),
            });

            const data = await response.json();

            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: data.response || "I'm having trouble connecting right now."
            };

            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error(error);
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: "Sorry, something went wrong with the connection."
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            {isOpen && (
                <div className="w-80 sm:w-96 rounded-2xl border bg-white shadow-2xl overflow-hidden flex flex-col h-[500px] transition-all animate-in slide-in-from-bottom-10 fade-in">
                    {/* Header */}
                    <div className="bg-deep-blue p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-white/10 rounded-full">
                                <Sparkles className="h-5 w-5 text-teal" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">Kovero Assistant</h3>
                                <p className="text-[10px] text-blue-200">Powered by AI</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 h-8 w-8">
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "max-w-[85%] rounded-lg p-3 text-sm",
                                    msg.role === "user"
                                        ? "ml-auto bg-deep-blue text-white rounded-br-none"
                                        : "bg-white border shadow-sm text-gray-800 rounded-bl-none"
                                )}
                            >
                                {msg.content}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="bg-white border shadow-sm rounded-lg p-3 rounded-bl-none w-fit">
                                <div className="flex gap-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 bg-white border-t">
                        <div className="flex gap-2">
                            <input
                                className="flex-1 text-sm bg-gray-50 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-deep-blue/20"
                                placeholder="Type a message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            />
                            <Button size="icon" className="bg-teal hover:bg-teal/90 rounded-md h-10 w-10 shrink-0" onClick={handleSend} disabled={isLoading || !input.trim()}>
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="h-14 w-14 rounded-full bg-deep-blue shadow-lg hover:bg-deep-blue/90 hover:scale-105 transition-all p-0 flex items-center justify-center"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </Button>
        </div>
    );
}
