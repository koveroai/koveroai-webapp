import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Users, FileText, Activity, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HospitalDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-deep-blue">Hospital Overview</h1>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-l-4 border-l-teal">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Insured Admissions</CardTitle>
                        <Users className="h-4 w-4 text-[#22C3D9]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground text-gray-500">Today</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-orange-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending Pre-Auths</CardTitle>
                        <FileText className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5</div>
                        <p className="text-xs text-muted-foreground text-gray-500">Requires Action</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-red-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Claims Awaiting Response</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground text-gray-500">Input Needed</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Recent Claims */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Recent Claims</CardTitle>
                        <Button variant="ghost" size="sm" className="text-[#22C3D9]" asChild>
                            <Link href="/hospital/claims">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { id: "C105", patient: "Rahul Gupta", status: "In Review", amount: "₹85,000", color: "blue" },
                                { id: "C104", patient: "Anita Desai", status: "Approved", amount: "₹1,20,000", color: "green" },
                                { id: "C103", patient: "Vikram Singh", status: "Query Raised", amount: "₹45,000", color: "orange" },
                                { id: "C102", patient: "Jay Sharma", status: "Submitted", amount: "₹45,000", color: "gray" },
                            ].map((claim) => (
                                <div key={claim.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                    <div>
                                        <p className="font-medium text-sm">{claim.patient}</p>
                                        <p className="text-xs text-gray-500">Claim #{claim.id}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium text-sm">{claim.amount}</p>
                                        <Badge variant="default" className={`bg-${claim.color}-500 text-xs`}>{claim.status}</Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Action Required */}
                <Card>
                    <CardHeader><CardTitle>Action Required</CardTitle></CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {[
                                { msg: "Upload discharge summary for Claim #C103", time: "2 hours ago", urgent: true },
                                { msg: "Respond to query regarding Pre-Auth #PA-908", time: "4 hours ago", urgent: true },
                                { msg: "Verify insurance details for new admission (Bed 204)", time: "5 hours ago", urgent: false }
                            ].map((alert, i) => (
                                <div key={i} className="flex gap-3 p-3 bg-red-50 rounded-lg border border-red-100 items-start">
                                    <AlertTriangle className={`h-5 w-5 ${alert.urgent ? "text-red-600" : "text-orange-500"} shrink-0 mt-0.5`} />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{alert.msg}</p>
                                        <p className="text-xs text-gray-500">{alert.time}</p>
                                    </div>
                                    {alert.urgent && <Badge variant="destructive" className="ml-auto text-[10px] h-5">Urgent</Badge>}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" className="w-full">View All Alerts</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
