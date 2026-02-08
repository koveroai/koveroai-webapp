"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock, FileText, Upload } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export default function ClaimDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    const steps = [
        { label: "Submitted", date: "Feb 08", status: "completed" },
        { label: "Under Review", date: "Feb 09", status: "current" },
        { label: "Approved", date: "-", status: "upcoming" },
        { label: "Paid", date: "-", status: "upcoming" }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/user/claims" className="text-gray-500 hover:text-gray-900">
                        <ArrowLeft className="h-6 w-6" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-deep-blue flex items-center gap-3">
                            Claim #{id}
                            <Badge variant="default" className="bg-blue-500 text-sm py-1">In Review</Badge>
                        </h1>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="w-full py-8 px-4 overflow-x-auto">
                <div className="flex justify-between items-center relative min-w-[600px]">
                    {/* Connecting Line */}
                    <div className="absolute left-0 top-6 w-full h-1 bg-gray-200 -z-10" />
                    <div className="absolute left-0 top-6 h-1 bg-[#22C3D9] -z-10 transition-all duration-500" style={{ width: '35%' }} />

                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <div className={cn(
                                "w-12 h-12 rounded-full flex items-center justify-center border-4 transition-colors bg-white",
                                step.status === "completed" ? "border-[#22C3D9] text-[#22C3D9]" :
                                    step.status === "current" ? "border-blue-500 text-blue-500 animate-pulse" : "border-gray-200 text-gray-300"
                            )}>
                                {step.status === "completed" ? <CheckCircle className="w-6 h-6" /> :
                                    step.status === "current" ? <Clock className="w-6 h-6" /> :
                                        <div className="w-3 h-3 rounded-full bg-gray-200" />}
                            </div>
                            <div className="text-center">
                                <p className={cn("font-medium text-sm", step.status === "upcoming" ? "text-gray-400" : "text-gray-900")}>{step.label}</p>
                                <p className="text-xs text-gray-500">{step.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader><CardTitle>Claim Summary</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-gray-500">Policy Number</div>
                            <div className="font-medium text-right">POL-998877</div>

                            <div className="text-gray-500">Hospital</div>
                            <div className="font-medium text-right">Apollo Hospital</div>

                            <div className="text-gray-500">Patient Name</div>
                            <div className="font-medium text-right">Self (Jay)</div>

                            <div className="text-gray-500">Diagnosis</div>
                            <div className="font-medium text-right">Viral Pyrexia</div>

                            <div className="text-gray-500 pt-2 border-t font-semibold">Claimed Amount</div>
                            <div className="font-bold text-right pt-2 border-t text-lg">₹45,000</div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Documents</CardTitle></CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {[
                                "Discharge_Summary.pdf",
                                "Final_Bill_Breakup.pdf",
                                "Lab_Reports.pdf"
                            ].map((doc, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <FileText className="h-5 w-5 text-red-500" />
                                        <span className="text-sm font-medium text-gray-700">{doc}</span>
                                    </div>
                                    <Button variant="ghost" size="sm" className="text-[#22C3D9] hover:text-[#22C3D9] hover:opacity-80">View</Button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-6 border-t text-center">
                            <Button variant="outline" className="w-full border-dashed">
                                <Upload className="w-4 h-4 mr-2" /> Upload Additional Docs
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
