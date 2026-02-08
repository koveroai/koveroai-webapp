import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Users, FileText, Activity, AlertTriangle, ArrowRight, Clock, CheckCircle, XCircle, Zap, Bed, TrendingUp, DollarSign, Calendar } from "lucide-react";
import Link from "next/link";

export default function HospitalDashboard() {
    const stats = [
        {
            title: "Insured Admissions",
            value: "12",
            subtitle: "Today",
            icon: Users,
            gradient: "from-[#22C3D9] to-cyan-400",
            iconBg: "bg-[#22C3D9]/10",
            trend: "+3 from yesterday"
        },
        {
            title: "Pending Pre-Auths",
            value: "8",
            subtitle: "Requires Action",
            icon: FileText,
            gradient: "from-orange-500 to-amber-400",
            iconBg: "bg-orange-500/10",
            trend: "3 urgent"
        },
        {
            title: "Claims Awaiting",
            value: "5",
            subtitle: "Input Needed",
            icon: AlertTriangle,
            gradient: "from-red-500 to-rose-400",
            iconBg: "bg-red-500/10",
            trend: "2 overdue"
        },
        {
            title: "Approvals Today",
            value: "₹4.2L",
            subtitle: "6 claims approved",
            icon: CheckCircle,
            gradient: "from-green-500 to-emerald-400",
            iconBg: "bg-green-500/10",
            trend: "+15% this week"
        },
    ];

    const claims = [
        { id: "C108", patient: "Priya Patel", status: "In Review", amount: "₹1,45,000", statusColor: "bg-blue-500", admission: "Feb 07" },
        { id: "C107", patient: "Suresh Kumar", status: "Approved", amount: "₹78,000", statusColor: "bg-green-500", admission: "Feb 06" },
        { id: "C106", patient: "Neha Sharma", status: "Pre-Auth", amount: "₹2,10,000", statusColor: "bg-purple-500", admission: "Feb 06" },
        { id: "C105", patient: "Rahul Gupta", status: "In Review", amount: "₹85,000", statusColor: "bg-blue-500", admission: "Feb 05" },
        { id: "C104", patient: "Anita Desai", status: "Approved", amount: "₹1,20,000", statusColor: "bg-green-500", admission: "Feb 04" },
        { id: "C103", patient: "Vikram Singh", status: "Query", amount: "₹45,000", statusColor: "bg-orange-500", admission: "Feb 03" },
    ];

    const admissions = [
        { bed: "ICU-201", patient: "Priya Patel", insurer: "HDFC Ergo", status: "Active", days: 2 },
        { bed: "ICU-203", patient: "Amit Joshi", insurer: "Star Health", status: "Active", days: 4 },
        { bed: "304", patient: "Suresh Kumar", insurer: "ICICI Lombard", status: "Discharge Today", days: 3 },
        { bed: "412", patient: "Neha Sharma", insurer: "Max Bupa", status: "Active", days: 1 },
        { bed: "215", patient: "Rajesh Verma", insurer: "HDFC Ergo", status: "Active", days: 5 },
    ];

    const alerts = [
        { msg: "Upload discharge summary for Claim #C103", time: "2 hours ago", urgent: true, icon: FileText },
        { msg: "Respond to query regarding Pre-Auth #PA-912", time: "3 hours ago", urgent: true, icon: AlertTriangle },
        { msg: "Respond to query regarding Pre-Auth #PA-908", time: "4 hours ago", urgent: true, icon: AlertTriangle },
        { msg: "Verify insurance for new admission (Bed 412)", time: "5 hours ago", urgent: false, icon: Users },
        { msg: "Submit final bill for Claim #C104", time: "1 day ago", urgent: false, icon: DollarSign }
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-deep-blue">Hospital Overview</h1>
                    <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
                        <span className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            Live
                        </span>
                        • Last updated 2 min ago
                    </p>
                </div>
                <Link
                    href="/hospital/preauth"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl gradient-teal text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-sm w-full sm:w-auto"
                >
                    <Zap className="h-4 w-4" /> New Pre-Auth
                </Link>
            </div>

            {/* Stats Grid - 2 cols on mobile, 4 on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                    <Card key={stat.title} className="overflow-hidden card-hover animate-slide-up" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}>
                        <div className={`h-1 w-full bg-gradient-to-r ${stat.gradient}`} />
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 md:p-6 md:pb-2">
                            <CardTitle className="text-xs md:text-sm font-medium text-gray-600 truncate">{stat.title}</CardTitle>
                            <div className={`p-1.5 md:p-2 rounded-lg ${stat.iconBg} shrink-0`}>
                                <stat.icon className="h-3 w-3 md:h-4 md:w-4" style={{ color: stat.gradient.includes('teal') ? '#22C3D9' : stat.gradient.includes('orange') ? '#F97316' : stat.gradient.includes('red') ? '#EF4444' : '#22C65E' }} />
                            </div>
                        </CardHeader>
                        <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
                            <div className="text-xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                            <div className="flex items-center justify-between mt-1 gap-1">
                                <p className="text-[10px] md:text-xs text-gray-500 flex items-center gap-1 truncate">
                                    <Clock className="h-2.5 w-2.5 md:h-3 md:w-3 shrink-0" />
                                    <span className="truncate">{stat.subtitle}</span>
                                </p>
                                <span className="text-[9px] md:text-[10px] text-gray-400 whitespace-nowrap hidden sm:block">{stat.trend}</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Active Admissions */}
            <Card className="animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                        <Bed className="h-5 w-5 text-[#22C3D9]" />
                        Active Insured Admissions
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">{admissions.length} patients</Badge>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {admissions.map((adm, i) => (
                            <div key={i} className="p-3 rounded-xl border border-gray-100 hover:border-[#22C3D9]/30 transition-colors cursor-pointer group">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-semibold text-[#22C3D9] bg-[#22C3D9]/10 px-2 py-0.5 rounded-full">{adm.bed}</span>
                                    <Badge variant={adm.status === 'Discharge Today' ? 'warning' : 'outline'} className="text-[9px] h-4">
                                        {adm.status === 'Discharge Today' ? 'Discharge' : `Day ${adm.days}`}
                                    </Badge>
                                </div>
                                <p className="font-medium text-sm text-gray-900 group-hover:text-[#22C3D9] transition-colors truncate">{adm.patient}</p>
                                <p className="text-xs text-gray-500 truncate">{adm.insurer}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Recent Claims */}
                <Card className="animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Recent Claims</CardTitle>
                        <Link href="/hospital/claims" className="text-sm text-[#22C3D9] hover:underline flex items-center gap-1">
                            View All <ArrowRight className="h-3 w-3" />
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2 max-h-72 overflow-y-auto">
                            {claims.map((claim) => (
                                <div key={claim.id} className="flex items-center justify-between p-2.5 md:p-3 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gray-200 flex items-center justify-center text-xs md:text-sm font-medium text-gray-600 shrink-0">
                                            {claim.patient.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-medium text-sm text-gray-900 group-hover:text-[#22C3D9] transition-colors truncate">{claim.patient}</p>
                                            <p className="text-xs text-gray-500">#{claim.id} • {claim.admission}</p>
                                        </div>
                                    </div>
                                    <div className="text-right shrink-0 ml-2">
                                        <p className="font-semibold text-sm text-gray-900">{claim.amount}</p>
                                        <Badge className={`${claim.statusColor} text-[9px] md:text-[10px] h-4 md:h-5`}>{claim.status}</Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Action Required */}
                <Card className="animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                            Action Required
                            <span className="h-5 w-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">{alerts.filter(a => a.urgent).length}</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2 max-h-56 overflow-y-auto">
                            {alerts.map((alert, i) => (
                                <div key={i} className={`flex gap-2 md:gap-3 p-2.5 md:p-3 rounded-xl border items-start transition-all cursor-pointer hover:shadow-sm ${alert.urgent ? 'bg-red-50/50 border-red-100 hover:bg-red-50' : 'bg-orange-50/50 border-orange-100 hover:bg-orange-50'}`}>
                                    <div className={`p-1.5 md:p-2 rounded-lg shrink-0 ${alert.urgent ? 'bg-red-100' : 'bg-orange-100'}`}>
                                        <alert.icon className={`h-3.5 w-3.5 md:h-4 md:w-4 ${alert.urgent ? "text-red-600" : "text-orange-500"}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs md:text-sm font-medium text-gray-900 line-clamp-2">{alert.msg}</p>
                                        <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">{alert.time}</p>
                                    </div>
                                    {alert.urgent && <Badge variant="destructive" className="text-[9px] md:text-[10px] h-4 md:h-5 shrink-0">Urgent</Badge>}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                        <Button variant="outline" className="w-full hover:border-[#22C3D9] hover:text-[#22C3D9] text-sm">
                            View All Alerts
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}


