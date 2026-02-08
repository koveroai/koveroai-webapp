"use client";

import { Home, Receipt, FileText, Users, BarChart, LifeBuoy, Settings } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const navItems = [
    { label: "Dashboard", href: "/hospital/dashboard", icon: Home },
    { label: "Claims", href: "/hospital/claims", icon: Receipt },
    { label: "Pre-Auth", href: "/hospital/preauth", icon: FileText },
    { label: "Patients", href: "/hospital/patients", icon: Users },
    { label: "Analytics", href: "/hospital/analytics", icon: BarChart },
    { label: "Support & Chat", href: "/hospital/support", icon: LifeBuoy },
    { label: "Settings", href: "/hospital/settings", icon: Settings },
];

export default function HospitalLayout({ children }: { children: React.ReactNode }) {
    return (
        // "hospital" role will show as "Hospital Portal" in Sidebar
        <DashboardLayout role="Hospital" navItems={navItems}>
            {children}
        </DashboardLayout>
    );
}
