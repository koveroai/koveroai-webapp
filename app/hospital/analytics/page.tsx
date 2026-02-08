import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function HospitalAnalytics() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-deep-blue">Hospital Analytics</h1>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Average Approval Time</CardTitle></CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-deep-blue">4.2 Hrs</div>
                        <p className="text-xs text-green-600">↓ 12% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Claim Approval Rate</CardTitle></CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-deep-blue">94%</div>
                        <p className="text-xs text-green-600">↑ 2% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Total Settlement (Feb)</CardTitle></CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-deep-blue">₹12.5 L</div>
                        <p className="text-xs text-gray-500">Across 18 claims</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="col-span-1">
                    <CardHeader><CardTitle>Claims Volume (Last 6 Months)</CardTitle></CardHeader>
                    <CardContent>
                        <div className="h-64 flex items-end justify-between gap-2 pt-4">
                            {[40, 65, 45, 80, 55, 70].map((h, i) => (
                                <div key={i} className="flex flex-col items-center flex-1 group">
                                    <div className="w-full max-w-[40px] bg-blue-100 rounded-t-sm group-hover:bg-blue-200 transition-all relative">
                                        <div className="absolute bottom-0 w-full bg-deep-blue rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }}></div>
                                    </div>
                                    <span className="text-xs text-gray-500 mt-2">{['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'][i]}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-1">
                    <CardHeader><CardTitle>Reasons for Rejection</CardTitle></CardHeader>
                    <CardContent>
                        <div className="space-y-4 pt-4">
                            {[
                                { label: "Documentation Missing", val: 45, color: "bg-orange-500" },
                                { label: "Policy Limit Exceeded", val: 30, color: "bg-red-500" },
                                { label: "Not Covered", val: 15, color: "bg-gray-500" },
                                { label: "Other", val: 10, color: "bg-[#22C3D9]" }
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>{item.label}</span>
                                        <span className="font-semibold">{item.val}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
