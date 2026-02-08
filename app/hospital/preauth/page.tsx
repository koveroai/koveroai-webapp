"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Plus, Search, FileText, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PreAuthPage() {
    const [selectedId, setSelectedId] = useState<string | null>("PA-101");

    const preAuths = [
        { id: "PA-101", patient: "Rahul Gupta", status: "Approved", amount: "₹85,000", date: "Feb 08" },
        { id: "PA-102", patient: "Priya Singh", status: "In Review", amount: "₹1,50,000", date: "Feb 08" },
        { id: "PA-103", patient: "Amit Kumar", status: "Denied", amount: "₹45,000", date: "Feb 07" },
        { id: "PA-104", patient: "Sneha Patel", status: "New", amount: "₹2,00,000", date: "Feb 07" },
    ];

    const selectedAuth = preAuths.find(p => p.id === selectedId);

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col gap-4">
            <div className="flex items-center justify-between shrink-0">
                <h1 className="text-2xl font-bold text-deep-blue">Pre-Authorizations</h1>
                <Button className="bg-deep-blue gap-2"><Plus className="h-4 w-4" /> Create New Pre-Auth</Button>
            </div>

            <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
                {/* Left Column: List */}
                <div className="col-span-4 flex flex-col gap-4 min-h-0 bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="p-4 border-b">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <input type="text" placeholder="Search patients..." className="w-full pl-9 h-9 rounded-md border text-sm" />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-2">
                        {preAuths.map(auth => (
                            <div
                                key={auth.id}
                                onClick={() => setSelectedId(auth.id)}
                                className={cn(
                                    "p-3 rounded-lg cursor-pointer border transition-colors",
                                    selectedId === auth.id ? "bg-blue-50 border-blue-200" : "bg-white border-transparent hover:bg-gray-50 border-gray-100"
                                )}
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-semibold text-sm text-gray-900">{auth.patient}</span>
                                    <span className="text-xs text-gray-500">{auth.date}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500">{auth.id}</span>
                                    <Badge variant={auth.status === "Approved" ? "success" : auth.status === "Denied" ? "destructive" : auth.status === "New" ? "default" : "warning"} className="text-[10px] px-1.5 py-0">
                                        {auth.status}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Details */}
                <div className="col-span-8 min-h-0 overflow-y-auto">
                    {selectedAuth ? (
                        <Card className="h-full border-none shadow-none bg-transparent">
                            <CardHeader className="bg-white rounded-t-xl border border-b-0">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xl flex items-center gap-2">
                                            {selectedAuth.patient}
                                            <Badge variant="outline" className="text-xs font-normal text-gray-500 ml-2">{selectedAuth.id}</Badge>
                                        </CardTitle>
                                        <CardDescription className="mt-1">Admitted for Viral Pyrexia</CardDescription>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">Estimated Cost</p>
                                        <p className="text-xl font-bold text-deep-blue">{selectedAuth.amount}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="bg-white border text-sm space-y-6 pt-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-500 uppercase">Policy Details</label>
                                        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                                            <FileText className="h-5 w-5 text-gray-400" />
                                            <div>
                                                <p className="font-medium">Star Health Insurance</p>
                                                <p className="text-xs text-gray-500">POL-556677</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-500 uppercase">Treating Doctor</label>
                                        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                                            <User className="h-5 w-5 text-gray-400" />
                                            <div>
                                                <p className="font-medium">Dr. S. K. Verma</p>
                                                <p className="text-xs text-gray-500">General Physician</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Clinical Indication</label>
                                    <p className="text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        Patient presented with high grade fever (103°F) since 3 days, body ache and chills. Suspected viral fever requiring IV fluids and monitoring.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Attached Documents</label>
                                    <div className="flex gap-2">
                                        <Badge variant="outline" className="bg-white"><FileText className="w-3 h-3 mr-1" /> OPD Card</Badge>
                                        <Badge variant="outline" className="bg-white"><FileText className="w-3 h-3 mr-1" /> Insurance Card</Badge>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="bg-white rounded-b-xl border border-t-0 flex justify-end gap-3 pt-6">
                                <Button variant="outline">Request More Info</Button>
                                <Button variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">Cancel Request</Button>
                            </CardFooter>
                        </Card>
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-400 border rounded-xl bg-white border-dashed">
                            Select a pre-auth request to view details
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
