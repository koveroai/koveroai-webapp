"use client";

import { Home, Inbox, Receipt, Building2, ShieldCheck, BarChart, LifeBuoy, Settings } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const navItems = [
    { label: "Dashboard", href: "/tpa/dashboard", icon: Home },
    { label: "Work Queue", href: "/tpa/work-queue", icon: Inbox },
    { label: "Claims", href: "/tpa/claims", icon: Receipt },
    { label: "Hospitals", href: "/tpa/hospitals", icon: Building2 },
    { label: "Policies KB", href: "/tpa/policies", icon: ShieldCheck },
    { label: "Analytics", href: "/tpa/analytics", icon: BarChart },
    { label: "Support", href: "/tpa/support", icon: LifeBuoy },
    { label: "Settings", href: "/tpa/settings", icon: Settings },
];

export default function TPALayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardLayout role="TPA" navItems={navItems}>
            {children}
        </DashboardLayout>
    );
}
