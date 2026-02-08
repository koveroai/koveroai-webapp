import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Search, Filter } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export default function AdminAuditLogs() {
    const logs = [
        { id: "LOG-001", action: "User Login", user: "Rahul Gupta", role: "User", ip: "192.168.1.1", time: "Feb 08, 10:00 AM", status: "Success" },
        { id: "LOG-002", action: "Claim Approved", user: "Jay Sharma", role: "TPA", ip: "192.168.1.55", time: "Feb 08, 09:45 AM", status: "Success" },
        { id: "LOG-003", action: "Policy Created", user: "Admin", role: "Admin", ip: "10.0.0.1", time: "Feb 07, 04:30 PM", status: "Success" },
        { id: "LOG-004", action: "Failed Login", user: "Unknown", role: "-", ip: "45.33.22.11", time: "Feb 07, 02:15 PM", status: "Failed" },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-deep-blue">System Audit Logs</h1>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Activity Log</CardTitle>
                    <div className="flex gap-2">
                        <div className="relative w-64">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <input type="text" placeholder="Search logs..." className="w-full pl-9 h-9 rounded-md border text-sm" />
                        </div>
                        <button className="p-2 border rounded-md hover:bg-gray-50"><Filter className="h-4 w-4 text-gray-500" /></button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-500 border-b">
                            <tr>
                                <th className="px-6 py-3 font-medium">Log ID</th>
                                <th className="px-6 py-3 font-medium">Action</th>
                                <th className="px-6 py-3 font-medium">User</th>
                                <th className="px-6 py-3 font-medium">Role</th>
                                <th className="px-6 py-3 font-medium">IP Address</th>
                                <th className="px-6 py-3 font-medium">Time</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-mono text-xs text-gray-500">{log.id}</td>
                                    <td className="px-6 py-4 font-medium">{log.action}</td>
                                    <td className="px-6 py-4">{log.user}</td>
                                    <td className="px-6 py-4"><Badge variant="outline">{log.role}</Badge></td>
                                    <td className="px-6 py-4 font-mono text-xs">{log.ip}</td>
                                    <td className="px-6 py-4 text-gray-500">{log.time}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant={log.status === "Success" ? "success" : "destructive"}>
                                            {log.status}
                                        </Badge>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    );
}
