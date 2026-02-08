"use client";

import { Home, ShieldCheck, Receipt, Folder, LifeBuoy, Settings } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const navItems = [
    { label: "Dashboard", href: "/user/dashboard", icon: Home },
    { label: "My Policies", href: "/user/policies", icon: ShieldCheck },
    { label: "Claims", href: "/user/claims", icon: Receipt },
    { label: "Documents", href: "/user/documents", icon: Folder },
    { label: "Support & Chat", href: "/user/support", icon: LifeBuoy },
    { label: "Settings", href: "/user/settings", icon: Settings },
];

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardLayout role="user" navItems={navItems}>
            {children}
        </DashboardLayout>
    );
}
