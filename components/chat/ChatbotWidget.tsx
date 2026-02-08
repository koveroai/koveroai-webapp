"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    role: "user" | "ai";
    content: string;
    timestamp?: string;
}

export function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: "1", role: "ai", content: "Hello! I'm Kovero AI. How can I help you with claims or policies today?", timestamp: "Just now" }
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

        const userMsg: Message = { id: Date.now().toString(), role: "user", content: input, timestamp: "Just now" };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input, history: messages }),
            });

            const data = await response.json();

            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: data.response || "I'm having trouble connecting right now.",
                timestamp: "Just now"
            };

            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error(error);
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: "Sorry, something went wrong with the connection.",
                timestamp: "Just now"
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {isOpen && (
                <div className="w-80 sm:w-96 rounded-2xl border border-gray-200/50 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col h-[520px] transition-all animate-slide-up">
                    {/* Header */}
                    <div className="gradient-primary p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/10 rounded-xl">
                                <Sparkles className="h-5 w-5 text-[#22C3D9]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">Kovero Assistant</h3>
                                <div className="flex items-center gap-1.5 text-[10px] text-blue-200">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                                    Online • AI-Powered
                                </div>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 h-8 w-8 rounded-lg">
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex gap-2",
                                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                                )}
                            >
                                {/* Avatar */}
                                <div className={cn(
                                    "h-7 w-7 rounded-full flex items-center justify-center shrink-0",
                                    msg.role === "user" ? "gradient-primary" : "bg-[#22C3D9]/10"
                                )}>
                                    {msg.role === "user"
                                        ? <User className="h-3.5 w-3.5 text-white" />
                                        : <Bot className="h-3.5 w-3.5 text-[#22C3D9]" />
                                    }
                                </div>

                                {/* Message bubble */}
                                <div className={cn(
                                    "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm",
                                    msg.role === "user"
                                        ? "gradient-primary text-white rounded-tr-sm"
                                        : "bg-white border border-gray-100 shadow-sm text-gray-800 rounded-tl-sm"
                                )}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex gap-2">
                                <div className="h-7 w-7 rounded-full bg-[#22C3D9]/10 flex items-center justify-center">
                                    <Bot className="h-3.5 w-3.5 text-[#22C3D9]" />
                                </div>
                                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm px-4 py-3 w-fit">
                                    <div className="flex gap-1.5">
                                        <span className="w-2 h-2 bg-[#22C3D9]/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-2 h-2 bg-[#22C3D9]/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-2 h-2 bg-[#22C3D9]/40 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 bg-white border-t border-gray-100">
                        <div className="flex gap-2">
                            <input
                                className="flex-1 text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#22C3D9]/20 focus:border-[#22C3D9] transition-all placeholder:text-gray-400"
                                placeholder="Type a message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            />
                            <Button
                                size="icon"
                                className="gradient-teal rounded-xl h-10 w-10 shrink-0 shadow-sm hover:opacity-90 transition-opacity"
                                onClick={handleSend}
                                disabled={isLoading || !input.trim()}
                            >
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "h-14 w-14 rounded-full shadow-lg p-0 flex items-center justify-center transition-all",
                    isOpen
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "gradient-primary hover:opacity-90 animate-glow"
                )}
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </Button>
        </div>
    );
}

