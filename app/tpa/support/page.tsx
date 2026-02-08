import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { LifeBuoy, Phone, Mail } from "lucide-react";

export default function TPASupport() {
    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-deep-blue">TPA System Support</h1>

            <Card className="text-center py-8">
                <CardContent className="flex flex-col items-center gap-4">
                    <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center">
                        <LifeBuoy className="h-8 w-8 text-deep-blue" />
                    </div>
                    <h2 className="text-xl font-bold">How can we help you today?</h2>
                    <p className="text-gray-500 max-w-md">Access system manuals, raise tickets for technical issues, or contact the Kovero platform team.</p>
                    <div className="flex gap-4 mt-4">
                        <Button className="bg-deep-blue">Raise Technical Ticket</Button>
                        <Button variant="outline">View System Status</Button>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader><CardTitle>Contact IT Support</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span>+91 22 1234 5678</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span>support@kovero.ai</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Documentation</CardTitle></CardHeader>
                    <CardContent className="space-y-2">
                        <a href="#" className="block text-sm text-[#22C3D9] hover:underline">User Manual v2.0</a>
                        <a href="#" className="block text-sm text-[#22C3D9] hover:underline">API Integration Guide</a>
                        <a href="#" className="block text-sm text-[#22C3D9] hover:underline">SLA Guidelines</a>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
