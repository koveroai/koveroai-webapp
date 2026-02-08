import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Users, Building2, FileText, Server } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-deep-blue">System Overview</h1>

            <div className="grid gap-6 md:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12,450</div>
                        <p className="text-xs text-muted-foreground">+180 this week</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Network Hospitals</CardTitle>
                        <Building2 className="h-4 w-4 text-[#22C3D9]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">450</div>
                        <p className="text-xs text-muted-foreground">+5 new onboarding</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
                        <FileText className="h-4 w-4 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8,900</div>
                        <p className="text-xs text-muted-foreground">95% renewal rate</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">System Health</CardTitle>
                        <Server className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">99.9%</div>
                        <p className="text-xs text-muted-foreground">All systems operational</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { action: "New Hospital Onboarded", detail: "Sunrise Nursing Home (Tier 3)", user: "Admin", time: "2 hours ago" },
                                { action: "Policy Updated", detail: "Corporate Plan A - Terms Revised", user: "System", time: "5 hours ago" },
                                { action: "User Role Changed", detail: "Jay Sharma promited to Senior TPA", user: "Admin", time: "1 day ago" },
                                { action: "System Backup", detail: "Daily Database Backup Completed", user: "System", time: "1 day ago" }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-start border-b pb-2 last:border-0 last:pb-0">
                                    <div>
                                        <p className="font-medium text-sm text-gray-900">{item.action}</p>
                                        <p className="text-xs text-gray-500">{item.detail}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500">{item.time}</p>
                                        <p className="text-xs text-gray-400">{item.user}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Platform Usage</CardTitle></CardHeader>
                    <CardContent>
                        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 border border-dashed">
                            Usage Chart Analytics Placeholder
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
