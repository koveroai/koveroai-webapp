import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function TPAAnalytics() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-deep-blue">TPA Performance Analytics</h1>

            <div className="grid gap-6 md:grid-cols-4">
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Claims Processed</CardTitle></CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-deep-blue">1,248</div>
                        <p className="text-xs text-green-600">This Month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Avg. Turnaround Time</CardTitle></CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-deep-blue">3.5 Hrs</div>
                        <p className="text-xs text-green-600">↓ 15% (Improved)</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Claim Rejection Rate</CardTitle></CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-deep-blue">12%</div>
                        <p className="text-xs text-gray-500">Industry Avg: 15%</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Auto-Adjudication</CardTitle></CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-deep-blue">45%</div>
                        <p className="text-xs text-green-600">↑ 5% from last month</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader><CardTitle>Claims Volume Trend</CardTitle></CardHeader>
                    <CardContent>
                        <div className="h-64 flex items-end justify-between gap-4 pt-4 px-4 bg-gray-50 rounded-lg border border-gray-100">
                            {/* Mock Chart Bars */}
                            {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 95].map((h, i) => (
                                <div key={i} className="flex-1 bg-[#22C3D9] rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 mt-2 px-4">
                            <span>Jan</span><span>Dec</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Disease Analysis (Top 5)</CardTitle></CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { name: "Viral Pyrexia", count: 320, percent: 35 },
                                { name: "Dengue Fever", count: 150, percent: 20 },
                                { name: "Cataract", count: 120, percent: 15 },
                                { name: "Appendicitis", count: 80, percent: 10 },
                                { name: "Kidney Stones", count: 50, percent: 5 },
                            ].map((d, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="flex justify-between text-sm">
                                        <span>{d.name}</span>
                                        <span className="text-gray-500">{d.count} Cases</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-deep-blue" style={{ width: `${d.percent}%` }}></div>
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
