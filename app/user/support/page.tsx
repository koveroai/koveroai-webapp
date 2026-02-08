import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { HelpCircle, MessageSquare, Phone, Mail, ChevronRight } from "lucide-react";

export default function SupportPage() {
    return (
        <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1 space-y-6">
                <h1 className="text-2xl font-bold text-deep-blue">Help Center</h1>

                <Card className="bg-deep-blue text-white border-none">
                    <CardHeader>
                        <CardTitle className="text-white">Need instant help?</CardTitle>
                        <CardDescription className="text-blue-200">Our AI assistant is available 24/7 to answer your queries.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button className="w-full bg-[#22C3D9] hover:bg-[#22C3D9]/90 text-white font-semibold gap-2">
                            <MessageSquare className="h-4 w-4" /> Chat with Kovero
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Contact Support</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-3 text-sm">
                            <Phone className="h-4 w-4 text-gray-400" />
                            <span>1800-123-4567</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Mail className="h-4 w-4 text-gray-400" />
                            <span>support@kovero.ai</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
                <Card>
                    <CardHeader><CardTitle>Common Questions</CardTitle></CardHeader>
                    <CardContent className="divide-y">
                        {[
                            "How do I file a cashless claim?",
                            "What documents are required for reimbursement?",
                            "How to add a new family member to my policy?",
                            "Can I track my claim status in real-time?",
                            "What is covered under Day Care procedures?"
                        ].map((q, i) => (
                            <button key={i} className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 px-2 rounded-md transition-colors">
                                <span className="text-sm font-medium text-gray-700">{q}</span>
                                <ChevronRight className="h-4 w-4 text-gray-400" />
                            </button>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
