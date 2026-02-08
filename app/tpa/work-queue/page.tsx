import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Link } from "lucide-react";

export default function WorkQueue() {
    const queue = [
        { id: "C105", priority: "High", type: "Pre-Auth", hospital: "Apollo Hospital", status: "New", sla: "30 mins" },
        { id: "C102", priority: "Medium", type: "Reimbursement", hospital: "Fortis Hospital", status: "In Review", sla: "4 hours" },
        { id: "C098", priority: "Low", type: "Cashless", hospital: "City Care", status: "Query Sent", sla: "1 day" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-deep-blue">My Work Queue</h1>
                <div className="flex gap-2">
                    <Button variant="outline">Filter</Button>
                    <Button variant="outline">Sort by SLA</Button>
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-500 border-b">
                            <tr>
                                <th className="px-6 py-3 font-medium">Claim ID</th>
                                <th className="px-6 py-3 font-medium">Priority</th>
                                <th className="px-6 py-3 font-medium">Type</th>
                                <th className="px-6 py-3 font-medium">Hospital</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 font-medium">SLA Due</th>
                                <th className="px-6 py-3 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {queue.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">{item.id}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant={item.priority === "High" ? "destructive" : item.priority === "Medium" ? "warning" : "secondary"}>
                                            {item.priority}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4">{item.type}</td>
                                    <td className="px-6 py-4">{item.hospital}</td>
                                    <td className="px-6 py-4"><Badge variant="outline">{item.status}</Badge></td>
                                    <td className="px-6 py-4 font-medium text-red-600">{item.sla}</td>
                                    <td className="px-6 py-4 text-right">
                                        <Button size="sm" className="bg-deep-blue">Process</Button>
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
