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
}

export function Sidebar({ role, items }: SidebarProps) {
    const pathname = usePathname();

    return (
        <div className="flex h-screen w-64 flex-col border-r bg-white flex-shrink-0">
            <div className="flex h-16 items-center justify-center border-b px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-deep-blue text-white font-bold">K</div>
                    <span className="text-xl font-bold text-deep-blue">Kovero.AI</span>
                </Link>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {role} Portal
                    </h2>
                    <nav className="space-y-1">
                        {items.map((item) => {
                            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-deep-blue text-white"
                                            : "text-gray-700 hover:bg-gray-100"
                                    )}
                                >
                                    <item.icon className={cn("mr-3 h-5 w-5", isActive ? "text-white" : "text-gray-500")} />
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>
            <div className="border-t p-4">
                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
                    <div className="h-8 w-8 rounded-full bg-teal text-white flex items-center justify-center font-bold">
                        {role[0].toUpperCase()}
                    </div>
                    <div className="text-sm">
                        <p className="font-medium text-gray-900">Demo User</p>
                        <p className="text-xs text-gray-500 capitalize">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
