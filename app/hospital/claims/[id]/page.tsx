"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, CheckSquare, Square, FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function HospitalClaimDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/hospital/claims" className="text-gray-500 hover:text-gray-900">
                    <ArrowLeft className="h-6 w-6" />
                </Link>
                <h1 className="text-2xl font-bold text-deep-blue">Claim Details #{id}</h1>
                <Badge variant="default" className="bg-blue-500">In Review</Badge>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Patient Info */}
                <Card>
                    <CardHeader><CardTitle>Patient Information</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500">Name</span>
                            <span className="font-medium">Rahul Gupta</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500">Policy ID</span>
                            <span className="font-medium">POL-556677</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500">Admission Date</span>
                            <span className="font-medium">Feb 05, 2026</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Contact</span>
                            <span className="font-medium">+91 99887 76655</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Claim Overview */}
                <Card>
                    <CardHeader><CardTitle>Claim Overview</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500">Diagnosis</span>
                            <span className="font-medium">Viral Pyrexia</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500">Treatment</span>
                            <span className="font-medium">Conservative Management</span>
                        </div>
                        <div className="flex justify-between pt-2">
                            <span className="text-gray-900 font-semibold">Total Claimed Amount</span>
                            <span className="font-bold text-lg">₹85,000</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader><CardTitle>Required Documents Checklist</CardTitle></CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                        {[
                            { label: "Discharge Summary", checked: true },
                            { label: "Final Hospital Bill", checked: true },
                            { label: "Pharmacy Bills", checked: true },
                            { label: "Investigation Reports", checked: false },
                            { label: "KYC Documents", checked: true },
                            { label: "Claim Form Signed", checked: true }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                {item.checked ? <CheckSquare className="h-5 w-5 text-[#22C3D9]" /> : <Square className="h-5 w-5 text-gray-400" />}
                                <span className={`${item.checked ? "text-gray-900" : "text-gray-500"} font-medium`}>{item.label}</span>
                                {!item.checked && <Badge variant="outline" className="ml-auto text-xs">Pending</Badge>}
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex gap-4">
                        <Button className="flex-1 bg-deep-blue">Upload Documents</Button>
                        <Button variant="outline" className="flex-1">Respond to Queries</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
