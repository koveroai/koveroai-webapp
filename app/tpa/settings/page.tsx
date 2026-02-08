import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { User, Bell, Lock } from "lucide-react";

export default function TPASettings() {
    return (
        <div className="space-y-6 max-w-4xl">
            <h1 className="text-2xl font-bold text-deep-blue">Settings</h1>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2 text-deep-blue">
                        <User className="h-5 w-5" />
                        <CardTitle>My Profile</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" value="Jay Sharma" disabled className="mt-1 w-full rounded-md border bg-gray-50 px-3 py-2 text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Role</label>
                        <input type="text" value="Senior Claims Processor" disabled className="mt-1 w-full rounded-md border bg-gray-50 px-3 py-2 text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                        <input type="text" value="TPA-EMP-445" disabled className="mt-1 w-full rounded-md border bg-gray-50 px-3 py-2 text-sm" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2 text-deep-blue">
                        <Bell className="h-5 w-5" />
                        <CardTitle>Notifications</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-sm">New Claim Assignment</p>
                            <p className="text-xs text-gray-500">Receive email when new claim is assigned to you.</p>
                        </div>
                        <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-sm">SLA Breach Alerts</p>
                            <p className="text-xs text-gray-500">High priority alerts for near-breach claims.</p>
                        </div>
                        <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-end">
                <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">Sign Out</Button>
            </div>
        </div>
    );
}
