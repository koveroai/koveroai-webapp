"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden animate-fade-in"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar - hidden on mobile by default, shown when sidebarOpen */}
            <div className={`
                fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <Sidebar role={role} items={navItems || []} onNavigate={() => setSidebarOpen(false)} />
            </div>

            {/* Main content */}
            <div className="flex flex-1 flex-col overflow-hidden min-w-0">
                {/* TopBar with mobile menu button */}
                <TopBar role={role}>
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors mr-2"
                        aria-label="Open menu"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </TopBar>
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                    {children}
                </main>
            </div>
            <ChatbotWidget />
        </div>
    );
}

