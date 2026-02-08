"use client";

import { LayoutDashboard, Users, Building2, Shield, BarChart, FileClock, Settings } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const navItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "User Management", href: "/admin/users", icon: Users },
    { label: "Hospitals", href: "/admin/hospitals", icon: Building2 },
    { label: "Products & Policies", href: "/admin/policies", icon: Shield },
    { label: "Analytics", href: "/admin/analytics", icon: BarChart },
    { label: "Audit Logs", href: "/admin/audit-logs", icon: FileClock },
    { label: "System Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardLayout role="Admin" navItems={navItems}>
            {children}
        </DashboardLayout>
    );
}
