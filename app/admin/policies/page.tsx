import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Plus } from "lucide-react";

export default function AdminPolicies() {
    const policies = [
        { code: "POL-CORP-001", name: "Corporate Group Health Plan A", type: "Group", coverage: "₹5L - ₹10L", status: "Active" },
        { code: "POL-RET-102", name: "Family Floater Gold", type: "Retail", coverage: "₹5L", status: "Active" },
        { code: "POL-SNR-550", name: "Senior Citizen Red", type: "Retail", coverage: "₹3L", status: "Draft" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-deep-blue">Product Configuration</h1>
                <Button className="bg-deep-blue gap-2"><Plus className="h-4 w-4" /> Create New Product</Button>
            </div>

            <Card>
                <CardHeader><CardTitle>Insurance Products</CardTitle></CardHeader>
                <CardContent className="p-0">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-500 border-b">
                            <tr>
                                <th className="px-6 py-3 font-medium">Product Code</th>
                                <th className="px-6 py-3 font-medium">Product Name</th>
                                <th className="px-6 py-3 font-medium">Type</th>
                                <th className="px-6 py-3 font-medium">Coverage Range</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {policies.map((policy) => (
                                <tr key={policy.code} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-mono text-xs">{policy.code}</td>
                                    <td className="px-6 py-4 font-medium">{policy.name}</td>
                                    <td className="px-6 py-4">{policy.type}</td>
                                    <td className="px-6 py-4">{policy.coverage}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant={policy.status === "Active" ? "success" : "secondary"}>
                                            {policy.status}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="outline" size="sm">Edit</Button>
                                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">Archive</Button>
                                        </div>
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
