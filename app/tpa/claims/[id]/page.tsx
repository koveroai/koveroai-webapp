"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Brain, AlertTriangle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export default function TPAClaimDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
                <Link href="/tpa/claims" className="text-gray-500 hover:text-gray-900">
                    <ArrowLeft className="h-6 w-6" />
                </Link>
                <h1 className="text-2xl font-bold text-deep-blue">Claim Review #{id}</h1>
                <Badge variant="destructive">High Priority</Badge>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Left: Summary */}
                <div className="col-span-3 space-y-6">
                    <Card>
                        <CardHeader><CardTitle>Claim Summary</CardTitle></CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div>
                                <p className="text-gray-500">Beneficiary</p>
                                <p className="font-semibold">Rahul Gupta</p>
                                <p className="text-xs text-gray-400">Age: 42 | Gender: M</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Hospital</p>
                                <p className="font-semibold">Apollo Hospital</p>
                                <p className="text-xs text-gray-400">Network ID: H-8899</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Policy</p>
                                <p className="font-semibold">POL-556677</p>
                                <p className="text-xs text-green-600">Active • No Claim Bonus</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle>Financials</CardTitle></CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Claimed</span>
                                <span className="font-semibold">₹85,000</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Deductible</span>
                                <span className="font-semibold">₹5,000</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Copay (10%)</span>
                                <span className="font-semibold">₹8,000</span>
                            </div>
                            <div className="border-t pt-2 flex justify-between">
                                <span className="font-bold">Payable</span>
                                <span className="font-bold text-deep-blue">₹72,000</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Center: Details Tabs */}
                <div className="col-span-6">
                    <Tabs defaultValue="overview">
                        <TabsList className="w-full grid grid-cols-4">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="medical">Medical</TabsTrigger>
                            <TabsTrigger value="billing">Billing</TabsTrigger>
                            <TabsTrigger value="notes">Notes</TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="mt-4 space-y-4">
                            <Card>
                                <CardHeader><CardTitle>Incident Details</CardTitle></CardHeader>
                                <CardContent className="space-y-2">
                                    <p className="text-sm text-gray-700"><span className="font-semibold">Diagnosis:</span> Viral Pyrexia with severe dehydration.</p>
                                    <p className="text-sm text-gray-700"><span className="font-semibold">Admission:</span> Emergency, Feb 05, 2026</p>
                                    <p className="text-sm text-gray-700"><span className="font-semibold">Discharge:</span> Feb 08, 2026</p>
                                    <p className="text-sm text-gray-700"><span className="font-semibold">Treatment:</span> IV Fluids, Antipyretics, Observation.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>Document Verification</CardTitle></CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between p-2 bg-green-50 rounded border border-green-100">
                                            <span className="text-sm">Discharge Summary</span>
                                            <Badge variant="success" className="bg-green-500 text-white">Verified</Badge>
                                        </div>
                                        <div className="flex items-center justify-between p-2 bg-yellow-50 rounded border border-yellow-100">
                                            <span className="text-sm">Final Bill Breakdown</span>
                                            <Badge variant="warning" className="bg-yellow-500 text-white">Review Needed</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Right: AI Insights */}
                <div className="col-span-3 space-y-6">
                    <Card className="border-[#22C3D9]/50 bg-[#22C3D9]/5">
                        <CardHeader className="pb-2">
                            <div className="flex items-center gap-2 text-[#22C3D9]">
                                <Sparkles className="h-5 w-5" />
                                <CardTitle className="text-[#22C3D9]">AI Insights</CardTitle>
                            </div>
                            <CardDescription>Automated analysis of claim data.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-2 items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                                <p className="text-xs text-gray-700">Diagnosis matches standard treatment protocol.</p>
                            </div>
                            <div className="flex gap-2 items-start">
                                <AlertTriangle className="h-4 w-4 text-orange-500 mt-1" />
                                <p className="text-xs text-gray-700">Pharmacy bill amount (₹12,000) is 20% higher than average for this diagnosis.</p>
                            </div>
                            <div className="flex gap-2 items-start">
                                <AlertTriangle className="h-4 w-4 text-red-500 mt-1" />
                                <p className="text-xs text-gray-700">Possible duplicate claim detected (Similiar claim ID C-002 from Jan).</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2"><CardTitle>Assistant</CardTitle></CardHeader>
                        <CardContent>
                            <div className="min-h-[200px] bg-gray-50 rounded-lg p-3 text-sm text-gray-500 flex items-center justify-center">
                                Chatbot Panel Placeholder
                            </div>
                            <div className="mt-2 flex gap-2">
                                <input className="flex-1 border rounded px-2 py-1 text-sm" placeholder="Ask AI..." />
                                <Button size="sm" className="bg-deep-blue">Send</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="pt-4 border-t space-y-2">
                        <Button className="w-full bg-green-600 hover:bg-green-700">Approve Claim</Button>
                        <Button variant="outline" className="w-full border-red-200 text-red-600 hover:bg-red-50">Reject / Query</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
