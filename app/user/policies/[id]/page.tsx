"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export default function PolicyDetails({ params }: { params: Promise<{ id: string }> }) {
    // Unwrapping params using React.use() as per Next.js 15+ patterns for async params
    const { id } = use(params);

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/user/policies" className="text-gray-500 hover:text-gray-900">
                    <ArrowLeft className="h-6 w-6" />
                </Link>
                <h1 className="text-2xl font-bold text-deep-blue">Policy Details #{id}</h1>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Left Column: Summary */}
                <Card className="lg:col-span-1 h-fit">
                    <CardHeader>
                        <CardTitle>Family Health Guard</CardTitle>
                        <p className="text-sm text-gray-500">Star Health Insurance</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex gap-2 flex-wrap">
                            <Badge>Family Floater</Badge>
                            <Badge variant="secondary">Cashless</Badge>
                            <Badge variant="outline">Tax Benefit</Badge>
                        </div>

                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500">Sum Insured</span>
                                <span className="font-semibold">₹5,00,000</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500">Premium</span>
                                <span className="font-semibold">₹12,400/yr</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500">Renewal Date</span>
                                <span className="font-semibold text-orange-600">Mar 01, 2026</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Members</span>
                                <span className="font-semibold">Self, Spouse, 1 Child</span>
                            </div>
                        </div>

                        <Button className="w-full bg-deep-blue">Download Policy PDF</Button>
                    </CardContent>
                </Card>

                {/* Right Column: Details Tabs */}
                <div className="lg:col-span-2">
                    <Tabs defaultValue="overview">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="coverage">Coverage</TabsTrigger>
                            <TabsTrigger value="exclusions">Exclusions</TabsTrigger>
                            <TabsTrigger value="faqs">FAQs</TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="mt-4">
                            <Card>
                                <CardHeader><CardTitle>Plan Highlights</CardTitle></CardHeader>
                                <CardContent className="space-y-4">
                                    {[
                                        "Comprehensive coverage for hospitalization expenses.",
                                        "Cashless treatment at over 10,000 network hospitals.",
                                        "Covers pre-hospitalization (30 days) and post-hospitalization (60 days).",
                                        "Free annual health checkup for all insured members."
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-[#22C3D9] shrink-0 mt-0.5" />
                                            <p className="text-sm text-gray-700">{item}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="coverage" className="mt-4">
                            <Card>
                                <CardHeader><CardTitle>What is Covered?</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        <li className="p-3 bg-gray-50 rounded-lg">
                                            <p className="font-semibold text-deep-blue text-sm">In-patient Hospitalization</p>
                                            <p className="text-xs text-gray-500">Room rent, nursing, ICU charges covered up to sum insured.</p>
                                        </li>
                                        <li className="p-3 bg-gray-50 rounded-lg">
                                            <p className="font-semibold text-deep-blue text-sm">Day Care Procedures</p>
                                            <p className="text-xs text-gray-500">Coverage for 500+ surgeries/procedures requiring &lt; 24hr hospitalization.</p>
                                        </li>
                                        <li className="p-3 bg-gray-50 rounded-lg">
                                            <p className="font-semibold text-deep-blue text-sm">Emergency Ambulance</p>
                                            <p className="text-xs text-gray-500">Reimbursement up to ₹2,000 per hospitalization.</p>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="exclusions" className="mt-4">
                            <Card className="border-red-100 bg-red-50/10">
                                <CardHeader><CardTitle className="text-red-700">Common Exclusions</CardTitle></CardHeader>
                                <CardContent className="space-y-4">
                                    {[
                                        "Expenses related to self-inflicted injuries or attempt to suicide.",
                                        "Cosmetic or plastic surgery unless necessitated by accident/cancer.",
                                        "Treatment for alcohol or drug abuse.",
                                        "Unproven or experimental treatments."
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                            <p className="text-sm text-gray-700">{item}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="faqs" className="mt-4">
                            <Card>
                                <CardContent className="pt-6">
                                    <p className="text-center text-gray-500 italic">Frequently asked questions will appear here.</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
