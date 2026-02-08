"use client";

import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { ChatbotWidget } from "@/components/chat/ChatbotWidget";

export function DashboardLayout({
    children,
    role = "User",
    navItems
}: {
    children: React.ReactNode;
    role?: string;
    navItems?: { label: string; href: string; icon: any }[];
}) {
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar role={role} items={navItems || []} />
            <div className="flex flex-1 flex-col overflow-hidden">
                <TopBar role={role} />
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                    {children}
                </main>
            </div>
            <ChatbotWidget />
        </div>
    );
}
