"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Search } from "lucide-react";

export default function PatientsPage() {
    const patients = [
        { id: "P-1001", name: "Rahul Gupta", room: "204", policy: "POL-556677", status: "Admitted" },
        { id: "P-1002", name: "Anita Desai", room: "301", policy: "POL-223344", status: "Discharged" },
        { id: "P-1003", name: "Vikram Singh", room: "105", policy: "POL-112233", status: "Admitted" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-deep-blue">Patient Records</h1>
                <div className="relative w-72">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <input type="text" placeholder="Search by Name or ID..." className="w-full pl-9 h-9 rounded-md border text-sm" />
                </div>
            </div>

            <Card>
                <CardHeader><CardTitle>All Patients</CardTitle></CardHeader>
                <CardContent>
                    <table className="w-full caption-bottom text-sm text-left">
                        <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted text-gray-500">
                                <th className="h-12 px-4 align-middle font-medium">Patient ID</th>
                                <th className="h-12 px-4 align-middle font-medium">Name</th>
                                <th className="h-12 px-4 align-middle font-medium">Room No.</th>
                                <th className="h-12 px-4 align-middle font-medium">Primary Policy</th>
                                <th className="h-12 px-4 align-middle font-medium">Status</th>
                                <th className="h-12 px-4 align-middle font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {patients.map((patient) => (
                                <tr key={patient.id} className="border-b transition-colors hover:bg-muted/50">
                                    <td className="p-4 align-middle font-medium">{patient.id}</td>
                                    <td className="p-4 align-middle">{patient.name}</td>
                                    <td className="p-4 align-middle">{patient.room}</td>
                                    <td className="p-4 align-middle">{patient.policy}</td>
                                    <td className="p-4 align-middle">
                                        <Badge variant={patient.status === "Admitted" ? "default" : "secondary"}>
                                            {patient.status}
                                        </Badge>
                                    </td>
                                    <td className="p-4 align-middle text-right">
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={`/hospital/patients/${patient.id}`}>View Details</Link>
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
