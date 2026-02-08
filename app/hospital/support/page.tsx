import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MessageSquare, Phone, Mail, FileText } from "lucide-react";

export default function HospitalSupport() {
    return (
        <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader><CardTitle>Hospital Support Resources</CardTitle></CardHeader>
                    <CardContent className="grid gap-4 md:grid-cols-2">
                        <div className="p-4 border rounded-lg hover:border-deep-blue transition-colors cursor-pointer">
                            <FileText className="h-6 w-6 text-[#22C3D9] mb-2" />
                            <h3 className="font-semibold">Process Manual</h3>
                            <p className="text-xs text-gray-500">Guide to cashless admissions and discharge.</p>
                        </div>
                        <div className="p-4 border rounded-lg hover:border-deep-blue transition-colors cursor-pointer">
                            <FileText className="h-6 w-6 text-[#22C3D9] mb-2" />
                            <h3 className="font-semibold">Billing Guidelines</h3>
                            <p className="text-xs text-gray-500">Standard rates and non-medical items list.</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="mt-6">
                    <CardHeader><CardTitle>Frequently Asked Questions</CardTitle></CardHeader>
                    <CardContent>
                        {/* Add FAQ Accordion here if needed, for lightweight just list */}
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                            <li>What is the TAT for Pre-Authorization approval? (Standard: 2 hours)</li>
                            <li>How to raise a query for a denied claim?</li>
                            <li>Can we upload partial documents for initial approval?</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <Card className="bg-deep-blue text-white">
                    <CardHeader>
                        <CardTitle className="text-white">Priority Support</CardTitle>
                        <CardDescription className="text-blue-200">Dedicated line for network hospitals.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span className="font-semibold">022-4455-6677</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>network@kovero.ai</span>
                        </div>
                        <Button className="w-full bg-[#22C3D9] hover:bg-[#22C3D9]/90 text-white mt-4">
                            <MessageSquare className="h-4 w-4 mr-2" /> Live Chat
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
