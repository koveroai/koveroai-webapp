import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ShieldCheck, FileText, Calendar, Activity } from "lucide-react";

export default function UserDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-deep-blue">Welcome back, Jay</h1>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-l-4 border-l-teal">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
                        <ShieldCheck className="h-4 w-4 text-[#22C3D9]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
                        <p className="text-xs text-muted-foreground text-gray-500">+1 pending renewal</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Open Claims</CardTitle>
                        <FileText className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1</div>
                        <p className="text-xs text-muted-foreground text-gray-500">In Review</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-orange-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Upcoming Renewals</CardTitle>
                        <Calendar className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12 Days</div>
                        <p className="text-xs text-muted-foreground text-gray-500">Expires Mar 01, 2026</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { title: "Claim #C102 Submitted", date: "Today, 10:23 AM", icon: Activity, color: "text-blue-500" },
                                { title: "Policy XYZ Renewed", date: "Feb 01, 2026", icon: ShieldCheck, color: "text-green-500" },
                                { title: "Document Verified", date: "Jan 28, 2026", icon: FileText, color: "text-gray-500" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                    <div className={`rounded-full bg-gray-50 p-2 ${item.color.replace('text-', 'bg-').replace('500', '100')}`}>
                                        <item.icon className={`h-4 w-4 ${item.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900">{item.title}</p>
                                        <p className="text-xs text-gray-500">{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
