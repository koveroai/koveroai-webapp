import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function AdminAnalytics() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-deep-blue">System Analytics</h1>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Total Premium Collected</CardTitle></CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-deep-blue">₹45.2 Cr</div>
                        <p className="text-xs text-green-600">↑ 12% YoY growth</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Claims Ratio</CardTitle></CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-deep-blue">68%</div>
                        <p className="text-xs text-gray-500">Target: &lt; 70%</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Net Promoter Score</CardTitle></CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-deep-blue">72</div>
                        <p className="text-xs text-green-600">↑ 4 points</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader><CardTitle>Enrollment Trends</CardTitle></CardHeader>
                    <CardContent>
                        <div className="h-64 flex items-end justify-between gap-4 pt-4 px-4 bg-gray-50 rounded-lg border border-gray-100">
                            {/* Mock Chart Bars */}
                            {[50, 60, 55, 70, 65, 80, 75, 85, 90, 95, 88, 100].map((h, i) => (
                                <div key={i} className="flex-1 bg-blue-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 mt-2 px-4">
                            <span>Jan</span><span>Dec</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Regional Distribution</CardTitle></CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { name: "Maharashtra", value: 45, color: "bg-blue-600" },
                                { name: "Delhi NCR", value: 25, color: "bg-blue-400" },
                                { name: "Karnataka", value: 15, color: "bg-blue-300" },
                                { name: "Tamil Nadu", value: 10, color: "bg-blue-200" },
                                { name: "Other", value: 5, color: "bg-gray-200" },
                            ].map((r, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="flex justify-between text-sm">
                                        <span>{r.name}</span>
                                        <span className="text-gray-500">{r.value}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className={`h-full ${r.color}`} style={{ width: `${r.value}%` }}></div>
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
