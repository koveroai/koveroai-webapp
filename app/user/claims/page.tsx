"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { FileText, Upload, CheckCircle } from "lucide-react";

export default function ClaimsPage() {
    const [step, setStep] = useState(1);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-deep-blue">Claims Center</h1>
            </div>

            <Tabs defaultValue="all-claims">
                <TabsList>
                    <TabsTrigger value="all-claims">All Claims</TabsTrigger>
                    <TabsTrigger value="new-claim">Start New Claim</TabsTrigger>
                </TabsList>

                <TabsContent value="all-claims" className="mt-6">
                    <Card>
                        <CardHeader><CardTitle>My Claims History</CardTitle></CardHeader>
                        <CardContent>
                            <table className="w-full caption-bottom text-sm text-left">
                                <thead className="[&_tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted text-gray-500">
                                        <th className="h-12 px-4 align-middle font-medium">Claim ID</th>
                                        <th className="h-12 px-4 align-middle font-medium">Policy</th>
                                        <th className="h-12 px-4 align-middle font-medium">Hospital</th>
                                        <th className="h-12 px-4 align-middle font-medium">Amount</th>
                                        <th className="h-12 px-4 align-middle font-medium">Status</th>
                                        <th className="h-12 px-4 align-middle font-medium">Last Updated</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0">
                                    <tr className="border-b transition-colors hover:bg-muted/50 cursor-pointer" onClick={() => window.location.href = '/user/claims/C102'}>
                                        <td className="p-4 align-middle font-medium">C102</td>
                                        <td className="p-4 align-middle">POL-998877</td>
                                        <td className="p-4 align-middle">Apollo Hospital</td>
                                        <td className="p-4 align-middle">₹45,000</td>
                                        <td className="p-4 align-middle"><Badge variant="default" className="bg-blue-500">In Review</Badge></td>
                                        <td className="p-4 align-middle text-gray-500">Feb 08, 2026</td>
                                    </tr>
                                    <tr className="border-b transition-colors hover:bg-muted/50 cursor-pointer" onClick={() => window.location.href = '/user/claims/C101'}>
                                        <td className="p-4 align-middle font-medium">C101</td>
                                        <td className="p-4 align-middle">POL-998877</td>
                                        <td className="p-4 align-middle">Fortis Hospital</td>
                                        <td className="p-4 align-middle">₹12,000</td>
                                        <td className="p-4 align-middle"><Badge variant="default" className="bg-green-500">Paid</Badge></td>
                                        <td className="p-4 align-middle text-gray-500">Jan 15, 2026</td>
                                    </tr>
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="new-claim" className="mt-6">
                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle>File a New Claim</CardTitle>
                            <div className="flex justify-between mt-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`flex items-center ${i < 4 ? "flex-1" : ""}`}>
                                        <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${step >= i ? "border-[#22C3D9] bg-[#22C3D9] text-white" : "border-gray-200 text-gray-400"} font-bold text-sm transition-colors`}>
                                            {step > i ? <CheckCircle className="w-5 h-5" /> : i}
                                        </div>
                                        {i < 4 && <div className={`h-1 flex-1 mx-2 ${step > i ? "bg-[#22C3D9]" : "bg-gray-200"}`} />}
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
                                <span>Policy</span>
                                <span>Details</span>
                                <span>Documents</span>
                                <span>Review</span>
                            </div>
                        </CardHeader>
                        <CardContent className="py-6 min-h-[300px]">
                            {step === 1 && (
                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-gray-700">Select Policy</label>
                                    <select className="w-full rounded-md border border-gray-300 p-2 focus:border-deep-blue focus:ring-1 focus:ring-deep-blue">
                                        <option>POL-998877 - Family Health Guard</option>
                                        <option>POL-112233 - Individual Health</option>
                                    </select>
                                </div>
                            )}
                            {step === 2 && (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Hospital Name</label>
                                            <input type="text" className="mt-1 w-full rounded-md border border-gray-300 p-2" placeholder="e.g. Apollo Hospital" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Admission Date</label>
                                            <input type="date" className="mt-1 w-full rounded-md border border-gray-300 p-2" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Estimated Amount</label>
                                        <input type="number" className="mt-1 w-full rounded-md border border-gray-300 p-2" placeholder="₹" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Reason for Hospitalization</label>
                                        <textarea className="mt-1 w-full rounded-md border border-gray-300 p-2" rows={3} placeholder="Describe the illness or injury..." />
                                    </div>
                                </div>
                            )}
                            {step === 3 && (
                                <div className="space-y-4 text-center border-2 border-dashed border-gray-200 rounded-lg p-8">
                                    <div className="flex flex-col items-center">
                                        <Upload className="h-10 w-10 text-gray-400 mb-2" />
                                        <p className="text-sm font-medium text-gray-900">Upload Discharge Summary & Bills</p>
                                        <p className="text-xs text-gray-500 mb-4">PDF, JPG, PNG up to 10MB</p>
                                        <Button variant="outline" size="sm">Select Files</Button>
                                    </div>
                                </div>
                            )}
                            {step === 4 && (
                                <div className="space-y-4">
                                    <div className="rounded-lg bg-green-50 p-4 border border-green-100">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-6 w-6 text-green-600" />
                                            <div>
                                                <p className="font-semibold text-green-900">Ready to Submit</p>
                                                <p className="text-sm text-green-700">Please review your claim details before submission.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        <p><strong>Policy:</strong> POL-998877</p>
                                        <p><strong>Hospital:</strong> Apollo Hospital</p>
                                        <p><strong>Amount:</strong> ₹45,000</p>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button
                                variant="ghost"
                                onClick={() => setStep(s => Math.max(1, s - 1))}
                                disabled={step === 1}
                            >
                                Back
                            </Button>
                            <Button
                                onClick={() => {
                                    if (step < 4) setStep(s => s + 1);
                                    else alert("Claim submitted (Demo)");
                                }}
                                className={step === 4 ? "bg-green-600 hover:bg-green-700" : "bg-deep-blue"}
                            >
                                {step === 4 ? "Submit Claim" : "Next Step"}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
