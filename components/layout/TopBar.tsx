"use client";

import { useState } from "react";
import { Bell, Search, ChevronDown, FileText, ShieldCheck, AlertCircle, Calendar, DollarSign, CheckCircle } from "lucide-react";

interface TopBarProps {
    role?: string;
    children?: React.ReactNode;
}

export function TopBar({ role, children }: TopBarProps) {
    const [showNotifications, setShowNotifications] = useState(false);

    const notifications = [
        { id: 1, icon: FileText, title: "Claim #C105 Updated", desc: "Status changed to In Review", time: "2m ago", color: "text-blue-500" },
        { id: 2, icon: ShieldCheck, title: "Policy Renewal", desc: "XYZ policy expires in 12 days", time: "1h ago", color: "text-green-500" },
        { id: 3, icon: AlertCircle, title: "Action Required", desc: "Upload documents for claim", time: "3h ago", color: "text-orange-500" },
        { id: 4, icon: DollarSign, title: "Payment Processed", desc: "₹45,000 credited to your account", time: "5h ago", color: "text-emerald-500" },
        { id: 5, icon: Calendar, title: "Appointment Reminder", desc: "Hospital visit scheduled tomorrow", time: "1d ago", color: "text-purple-500" },
        { id: 6, icon: CheckCircle, title: "Claim Approved", desc: "Claim #C102 has been approved", time: "2d ago", color: "text-green-600" },
    ];

    return (
        <header className="flex h-16 items-center justify-between border-b border-gray-100 bg-white/80 backdrop-blur-sm px-4 md:px-6 sticky top-0 z-30">
            {/* Left section with mobile menu + Search */}
            <div className="flex items-center flex-1 min-w-0">
                {/* Mobile menu button slot */}
                {children}

                {/* Search - responsive */}
                <div className="relative flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        disabled
                        className="h-10 w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-10 pr-4 text-sm outline-none transition-all focus:border-[#22C3D9] focus:ring-2 focus:ring-[#22C3D9]/20 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60 placeholder:text-gray-400"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-3 ml-3">
                {/* Notifications */}
                <div className="relative">
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="relative p-2 rounded-xl text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-[#22C3D9] animate-pulse-soft border border-white" />
                    </button>

                    {/* Dropdown */}
                    {showNotifications && (
                        <>
                            {/* Backdrop for mobile */}
                            <div
                                className="fixed inset-0 z-40 md:hidden"
                                onClick={() => setShowNotifications(false)}
                            />
                            <div className="fixed inset-x-4 top-16 z-50 md:absolute md:inset-auto md:right-0 md:top-full md:mt-2 md:w-80 rounded-xl border border-gray-100 bg-white shadow-lg overflow-hidden animate-slide-up">
                                <div className="p-3 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                                    <h3 className="font-semibold text-sm text-gray-900">Notifications</h3>
                                    <span className="text-xs text-[#22C3D9] font-medium">{notifications.length} new</span>
                                </div>
                                <div className="max-h-72 overflow-y-auto">
                                    {notifications.map((notif) => (
                                        <div key={notif.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50 last:border-0">
                                            <div className={`p-2 rounded-lg bg-gray-100 ${notif.color}`}>
                                                <notif.icon className="h-4 w-4" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate">{notif.title}</p>
                                                <p className="text-xs text-gray-500 truncate">{notif.desc}</p>
                                            </div>
                                            <span className="text-[10px] text-gray-400 whitespace-nowrap">{notif.time}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-2 border-t border-gray-100 bg-gray-50/50">
                                    <button className="w-full text-center text-xs font-medium text-[#22C3D9] hover:text-[#22C3D9]/80 py-1">
                                        View all notifications
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Divider - hidden on very small screens */}
                <div className="h-8 w-px bg-gray-200 hidden sm:block" />

                {/* User */}
                <button className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="relative">
                        <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-medium">
                            {(role || "U")[0].toUpperCase()}
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white" />
                    </div>
                    <div className="text-left hidden md:block">
                        <p className="text-sm font-medium text-gray-700">Hi, {role || "User"}</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400 hidden md:block" />
                </button>
            </div>
        </header>
    );
}


