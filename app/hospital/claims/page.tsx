import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function HospitalClaims() {
    const claims = [
        { id: "C105", patient: "Rahul Gupta", policy: "POL-556677", amount: "₹85,000", status: "In Review", date: "Feb 08" },
        { id: "C104", patient: "Anita Desai", policy: "POL-223344", amount: "₹1,20,000", status: "Approved", date: "Feb 07" },
        { id: "C103", patient: "Vikram Singh", policy: "POL-112233", amount: "₹45,000", status: "Query Raised", date: "Feb 06" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-deep-blue">Claims Management</h1>
                <Button className="bg-deep-blue">New Claim</Button>
            </div>

            <Card>
                <CardHeader><CardTitle>Submitted Claims</CardTitle></CardHeader>
                <CardContent>
                    <table className="w-full caption-bottom text-sm text-left">
                        <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted text-gray-500">
                                <th className="h-12 px-4 align-middle font-medium">Claim ID</th>
                                <th className="h-12 px-4 align-middle font-medium">Patient</th>
                                <th className="h-12 px-4 align-middle font-medium">Policy</th>
                                <th className="h-12 px-4 align-middle font-medium">Amount</th>
                                <th className="h-12 px-4 align-middle font-medium">Status</th>
                                <th className="h-12 px-4 align-middle font-medium">Submitted</th>
                                <th className="h-12 px-4 align-middle font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {claims.map((claim) => (
                                <tr key={claim.id} className="border-b transition-colors hover:bg-muted/50">
                                    <td className="p-4 align-middle font-medium">{claim.id}</td>
                                    <td className="p-4 align-middle">{claim.patient}</td>
                                    <td className="p-4 align-middle">{claim.policy}</td>
                                    <td className="p-4 align-middle">{claim.amount}</td>
                                    <td className="p-4 align-middle">
                                        <Badge variant={claim.status === "Approved" ? "success" : claim.status === "In Review" ? "default" : "warning"}>
                                            {claim.status}
                                        </Badge>
                                    </td>
                                    <td className="p-4 align-middle text-gray-500">{claim.date}</td>
                                    <td className="p-4 align-middle text-right">
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={`/hospital/claims/${claim.id}`}>View</Link>
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
