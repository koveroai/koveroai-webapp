import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ShieldCheck, FileText, Calendar, Activity, ArrowRight, TrendingUp, Clock, CheckCircle, DollarSign, AlertCircle, Heart, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export default function UserDashboard() {
    const stats = [
        {
            title: "Active Policies",
            value: "3",
            subtitle: "+1 pending renewal",
            icon: ShieldCheck,
            gradient: "from-[#22C3D9] to-cyan-400",
            iconBg: "bg-[#22C3D9]/10"
        },
        {
            title: "Open Claims",
            value: "2",
            subtitle: "1 In Review, 1 Pending",
            icon: FileText,
            gradient: "from-blue-500 to-indigo-400",
            iconBg: "bg-blue-500/10"
        },
        {
            title: "Upcoming Renewals",
            value: "12 Days",
            subtitle: "Health Plus - Mar 01",
            icon: Calendar,
            gradient: "from-orange-500 to-amber-400",
            iconBg: "bg-orange-500/10"
        },
        {
            title: "Total Saved",
            value: "₹1.8L",
            subtitle: "Claims settled this year",
            icon: DollarSign,
            gradient: "from-green-500 to-emerald-400",
            iconBg: "bg-green-500/10"
        },
    ];

    const activities = [
        { title: "Claim #C105 Submitted", date: "Today, 10:23 AM", icon: FileText, color: "text-blue-500", bgColor: "bg-blue-50", status: "Pending" },
        { title: "Pre-authorization Approved", date: "Today, 8:15 AM", icon: CheckCircle, color: "text-green-500", bgColor: "bg-green-50", status: "Approved" },
        { title: "Document Request for #C104", date: "Yesterday, 4:30 PM", icon: AlertCircle, color: "text-orange-500", bgColor: "bg-orange-50", status: "Action" },
        { title: "Claim #C102 Settled", date: "Feb 05, 2026", icon: DollarSign, color: "text-emerald-500", bgColor: "bg-emerald-50", status: "Settled" },
        { title: "Policy XYZ Renewed", date: "Feb 01, 2026", icon: CheckCircle, color: "text-green-500", bgColor: "bg-green-50", status: "Completed" },
        { title: "Hospital Visit - Apollo", date: "Jan 28, 2026", icon: Building2, color: "text-purple-500", bgColor: "bg-purple-50", status: "Completed" },
        { title: "Premium Payment Received", date: "Jan 15, 2026", icon: TrendingUp, color: "text-teal-500", bgColor: "bg-teal-50", status: "Paid" },
        { title: "Health Checkup Scheduled", date: "Jan 10, 2026", icon: Heart, color: "text-pink-500", bgColor: "bg-pink-50", status: "Completed" },
    ];

    const policies = [
        { name: "Health Plus Premium", type: "Health", sumInsured: "₹10,00,000", expiry: "Mar 01, 2026", status: "Active" },
        { name: "Family Floater", type: "Health", sumInsured: "₹5,00,000", expiry: "Aug 15, 2026", status: "Active" },
        { name: "Personal Accident", type: "Accident", sumInsured: "₹25,00,000", expiry: "Dec 01, 2026", status: "Active" },
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Welcome Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-deep-blue">Welcome back, Jay</h1>
                    <p className="text-gray-500 text-sm mt-1">Here's what's happening with your policies</p>
                </div>
                <Link
                    href="/user/claims"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-deep-blue text-white text-sm font-medium hover:bg-deep-blue/90 transition-colors shadow-sm w-full sm:w-auto"
                >
                    New Claim <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            {/* Stats Grid - 2 cols on mobile, 4 on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                    <Card key={stat.title} className="overflow-hidden card-hover animate-slide-up" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}>
                        <div className={`h-1 w-full bg-gradient-to-r ${stat.gradient}`} />
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 md:p-6 md:pb-2">
                            <CardTitle className="text-xs md:text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                            <div className={`p-1.5 md:p-2 rounded-lg ${stat.iconBg}`}>
                                <stat.icon className="h-3 w-3 md:h-4 md:w-4" style={{ color: stat.gradient.includes('teal') ? '#22C3D9' : stat.gradient.includes('blue') ? '#3B82F6' : stat.gradient.includes('orange') ? '#F97316' : '#22C65E' }} />
                            </div>
                        </CardHeader>
                        <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
                            <div className="text-xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                            <p className="text-[10px] md:text-xs text-gray-500 mt-1 flex items-center gap-1 truncate">
                                <Clock className="h-2.5 w-2.5 md:h-3 md:w-3 shrink-0" />
                                <span className="truncate">{stat.subtitle}</span>
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Policies Overview */}
            <Card className="animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>My Policies</CardTitle>
                    <Link href="/user/policies" className="text-sm text-[#22C3D9] hover:underline flex items-center gap-1">
                        View all <ArrowRight className="h-3 w-3" />
                    </Link>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {policies.map((policy, i) => (
                            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors gap-2 sm:gap-4 cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full gradient-teal flex items-center justify-center shrink-0">
                                        <ShieldCheck className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-medium text-sm text-gray-900 group-hover:text-[#22C3D9] transition-colors truncate">{policy.name}</p>
                                        <p className="text-xs text-gray-500">{policy.type} • Sum: {policy.sumInsured}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-4 ml-13 sm:ml-0">
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500">Expires</p>
                                        <p className="text-sm font-medium text-gray-700">{policy.expiry}</p>
                                    </div>
                                    <Badge variant="success" className="text-[10px] h-5">{policy.status}</Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Activity & Quick Actions */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Recent Activity */}
                <Card className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Recent Activity</CardTitle>
                        <Link href="/user/claims" className="text-sm text-[#22C3D9] hover:underline flex items-center gap-1">
                            View all <ArrowRight className="h-3 w-3" />
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3 max-h-80 overflow-y-auto">
                            {activities.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer">
                                    <div className={`rounded-xl p-2 md:p-2.5 ${item.bgColor} transition-transform group-hover:scale-110 shrink-0`}>
                                        <item.icon className={`h-3.5 w-3.5 md:h-4 md:w-4 ${item.color}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 group-hover:text-[#22C3D9] transition-colors truncate">{item.title}</p>
                                        <p className="text-xs text-gray-500">{item.date}</p>
                                    </div>
                                    <Badge variant={item.status === 'Action' ? 'warning' : item.status === 'Pending' ? 'secondary' : 'outline'} className="text-[9px] md:text-[10px] h-5 shrink-0 hidden sm:flex">
                                        {item.status}
                                    </Badge>
                                    <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-[#22C3D9] transition-colors shrink-0" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 md:space-y-3">
                        {[
                            { label: "View Policies", href: "/user/policies", icon: ShieldCheck },
                            { label: "File New Claim", href: "/user/claims", icon: FileText },
                            { label: "Upload Document", href: "/user/documents", icon: FileText },
                            { label: "Find Hospitals", href: "/user/support", icon: Building2 },
                            { label: "Contact Support", href: "/user/support", icon: Activity },
                        ].map((action) => (
                            <Link
                                key={action.label}
                                href={action.href}
                                className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border border-gray-100 hover:border-[#22C3D9]/30 hover:bg-[#22C3D9]/5 transition-all group"
                            >
                                <div className="p-1.5 md:p-2 rounded-lg bg-gray-50 group-hover:bg-[#22C3D9]/10 transition-colors">
                                    <action.icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-gray-500 group-hover:text-[#22C3D9] transition-colors" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{action.label}</span>
                                <ArrowRight className="h-4 w-4 text-gray-300 ml-auto group-hover:text-[#22C3D9] transition-colors" />
                            </Link>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}


