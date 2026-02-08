import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Activity, AlertOctagon, FileText, CheckCircle } from "lucide-react";

export default function TPADashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-deep-blue">TPA Overview: MediAssist</h1>

            <div className="grid gap-6 md:grid-cols-4">
                <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Open Claims</CardTitle>
                        <FileText className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">142</div>
                        <p className="text-xs text-muted-foreground">+8 new today</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-orange-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pre-Auth in Queue</CardTitle>
                        <Activity className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">28</div>
                        <p className="text-xs text-muted-foreground">High priority: 5</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-red-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">SLA Breaches</CardTitle>
                        <AlertOctagon className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">Action needed immediately</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Fraud Flags</CardTitle>
                        <AlertOctagon className="h-4 w-4 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">Potential fraud detected</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader><CardTitle>My Work Queue</CardTitle></CardHeader>
                    <CardContent>
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-500">
                                <tr>
                                    <th className="px-4 py-2">ID</th>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Due In</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {[
                                    { id: "C105", type: "Reimbursement", status: "In Review", due: "2 hrs" },
                                    { id: "PA-104", type: "Pre-Auth", status: "New", due: "30 mins" },
                                    { id: "C103", type: "Cashless", status: "Query Sent", due: "1 day" },
                                ].map((item, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 font-medium">{item.id}</td>
                                        <td className="px-4 py-3">{item.type}</td>
                                        <td className="px-4 py-3"><Badge variant="outline">{item.status}</Badge></td>
                                        <td className="px-4 py-3 text-red-600 font-medium">{item.due}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Recent System Activity</CardTitle></CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { msg: "Dr. Verma approved discharge summary for C102", time: "10 mins ago" },
                                { msg: "New fraud flag raised on Claim C-998 (Pattern Match)", time: "45 mins ago" },
                                { msg: "System maintenance scheduled for 2 AM", time: "2 hours ago" },
                                { msg: "Hospital 'City Care' updated bank details", time: "5 hours ago" }
                            ].map((log, i) => (
                                <div key={i} className="flex gap-3 items-start border-l-2 border-gray-200 pl-3 pb-1">
                                    <div className="w-2 h-2 rounded-full bg-[#22C3D9] mt-1.5 -ml-[19px] border-2 border-white" />
                                    <div>
                                        <p className="text-sm text-gray-800">{log.msg}</p>
                                        <p className="text-xs text-gray-500">{log.time}</p>
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
