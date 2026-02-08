"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, User, Phone, Mail, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export default function PatientDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/hospital/patients" className="text-gray-500 hover:text-gray-900">
                    <ArrowLeft className="h-6 w-6" />
                </Link>
                <h1 className="text-2xl font-bold text-deep-blue">Patient Profile - {id}</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-1 h-fit">
                    <CardContent className="pt-6 flex flex-col items-center">
                        <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                            <User className="h-12 w-12 text-gray-400" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Rahul Gupta</h2>
                        <p className="text-sm text-gray-500">Male, 42 Years</p>

                        <div className="w-full mt-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-gray-400" />
                                <span className="text-sm">+91 99887 76655</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-gray-400" />
                                <span className="text-sm">rahul.gupta@example.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="h-4 w-4 text-gray-400" />
                                <span className="text-sm">DOB: 12 Aug 1983</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="md:col-span-2">
                    <Tabs defaultValue="insurance">
                        <TabsList>
                            <TabsTrigger value="profile">Profile</TabsTrigger>
                            <TabsTrigger value="insurance">Insurance</TabsTrigger>
                            <TabsTrigger value="visits">Visits History</TabsTrigger>
                        </TabsList>

                        <TabsContent value="insurance" className="mt-4">
                            <Card>
                                <CardHeader><CardTitle>Insurance Details</CardTitle></CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">Primary Policy</label>
                                            <p className="font-medium mt-1">Star Health - Family Floater</p>
                                            <p className="text-sm text-gray-500">POL-556677</p>
                                        </div>
                                        <div>
                                            <label className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">Sum Insured</label>
                                            <p className="font-medium mt-1">₹5,00,000</p>
                                            <p className="text-sm text-green-600">Active</p>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t">
                                        <label className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">TPA</label>
                                        <p className="font-medium mt-1">MediAssist TPA</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="visits" className="mt-4">
                            <Card>
                                <CardHeader><CardTitle>Past Visits</CardTitle></CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="border-l-2 border-[#22C3D9] pl-4">
                                            <p className="font-medium text-sm">Admitted (Current)</p>
                                            <p className="text-xs text-gray-500">Feb 05, 2026 - Present</p>
                                            <p className="text-xs text-gray-500">Viral Pyrexia</p>
                                        </div>
                                        <div className="border-l-2 border-gray-200 pl-4">
                                            <p className="font-medium text-sm">OPD Visit</p>
                                            <p className="text-xs text-gray-500">Jan 10, 2026</p>
                                            <p className="text-xs text-gray-500">Routine Checkup</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="profile" className="mt-4">
                            <div className="p-4 text-center text-gray-500 bg-white border rounded-lg">Additional profile details...</div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
