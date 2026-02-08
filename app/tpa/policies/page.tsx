import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Search, FileText } from "lucide-react";

export default function TPAPolicies() {
    const policies = [
        { code: "POL-CORP-001", name: "Corporate Group Health Plan A", type: "Group", coverage: "₹5L - ₹10L" },
        { code: "POL-RET-102", name: "Family Floater Gold", type: "Retail", coverage: "₹5L" },
        { code: "POL-SNR-550", name: "Senior Citizen Red", type: "Retail", coverage: "₹3L" },
        { code: "POL-CORP-002", name: "Corporate Group Health Plan B", type: "Group", coverage: "₹3L - ₹5L" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-deep-blue">Policy Knowledge Base</h1>
                <div className="relative w-72">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <input type="text" placeholder="Search policies..." className="w-full pl-9 h-9 rounded-md border text-sm" />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {policies.map((policy) => (
                    <Card key={policy.code} className="hover:border-[#22C3D9] transition-colors cursor-pointer group">
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <FileText className="h-8 w-8 text-[#22C3D9] bg-[#22C3D9]/10 p-1.5 rounded-lg group-hover:bg-[#22C3D9] group-hover:text-white transition-colors" />
                                <Badge variant="outline">{policy.type}</Badge>
                            </div>
                            <CardTitle className="mt-3 text-lg">{policy.name}</CardTitle>
                            <CardDescription>{policy.code}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Coverage Limit</span>
                                    <span className="font-medium">{policy.coverage}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Co-pay</span>
                                    <span className="font-medium">10% - 20%</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
