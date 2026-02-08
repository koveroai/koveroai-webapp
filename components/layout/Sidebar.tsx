"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SidebarProps {
    role: string;
    items: {
        label: string;
        href: string;
        icon: LucideIcon;
    }[];
    onNavigate?: () => void;
}

export function Sidebar({ role, items, onNavigate }: SidebarProps) {
    const pathname = usePathname();

    return (
        <div className="flex h-screen w-64 flex-col border-r border-gray-100 bg-white flex-shrink-0 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/50 pointer-events-none" />

            {/* Logo Header */}
            <div className="relative flex h-16 items-center justify-center border-b border-gray-100 px-6">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
                        K
                    </div>
                    <span className="text-xl font-bold text-deep-blue">
                        Kovero<span className="text-[#22C3D9]">.AI</span>
                    </span>
                </Link>
            </div>

            {/* Navigation */}
            <div className="relative flex-1 overflow-y-auto py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-3 px-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                        {role} Portal
                    </h2>
                    <nav className="space-y-1">
                        {items.map((item) => {
                            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={onNavigate}
                                    className={cn(
                                        "group relative flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200",
                                        isActive
                                            ? "bg-deep-blue text-white shadow-sm"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    )}
                                >
                                    {/* Active indicator bar */}
                                    {isActive && (
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#22C3D9] rounded-r-full" />
                                    )}
                                    <item.icon className={cn(
                                        "mr-3 h-5 w-5 transition-colors",
                                        isActive ? "text-white" : "text-gray-400 group-hover:text-[#22C3D9]"
                                    )} />
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>

            {/* User Profile Section */}
            <div className="relative border-t border-gray-100 p-4">
                <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 p-3">
                    <div className="relative">
                        <div className="h-10 w-10 rounded-full gradient-teal text-white flex items-center justify-center font-bold text-sm shadow-sm">
                            {role[0].toUpperCase()}
                        </div>
                        {/* Online indicator */}
                        <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
                    </div>
                    <div className="text-sm flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 truncate">Demo User</p>
                        <p className="text-xs text-gray-500 capitalize">{role} Account</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

