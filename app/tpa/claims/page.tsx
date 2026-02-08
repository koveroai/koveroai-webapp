import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function TPAClaims() {
    const claims = [
        { id: "C105", user: "Rahul Gupta", hospital: "Apollo Hospital", policy: "POL-556677", amount: "₹85,000", status: "New", handler: "Jay (You)" },
        { id: "C104", user: "Anita Desai", hospital: "Fortis Hospital", policy: "POL-223344", amount: "₹1,20,000", status: "Approved", handler: "Priya M." },
        { id: "C102", user: "Jay Sharma", hospital: "City Care", policy: "POL-998877", amount: "₹45,000", status: "In Review", handler: "Jay (You)" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-deep-blue">All Claims</h1>
                <Button className="bg-deep-blue">Export Data</Button>
            </div>

            <Card>
                <CardContent className="p-0">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-500 border-b">
                            <tr>
                                <th className="px-6 py-3 font-medium">Claim ID</th>
                                <th className="px-6 py-3 font-medium">User</th>
                                <th className="px-6 py-3 font-medium">Hospital</th>
                                <th className="px-6 py-3 font-medium">Policy</th>
                                <th className="px-6 py-3 font-medium">Amount</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 font-medium">Handler</th>
                                <th className="px-6 py-3 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {claims.map((claim) => (
                                <tr key={claim.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">{claim.id}</td>
                                    <td className="px-6 py-4">{claim.user}</td>
                                    <td className="px-6 py-4">{claim.hospital}</td>
                                    <td className="px-6 py-4">{claim.policy}</td>
                                    <td className="px-6 py-4">{claim.amount}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant={claim.status === "Approved" ? "success" : claim.status === "New" ? "destructive" : "default"}>
                                            {claim.status}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">{claim.handler}</td>
                                    <td className="px-6 py-4 text-right">
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={`/tpa/claims/${claim.id}`}>Review</Link>
                                        </Button>
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
