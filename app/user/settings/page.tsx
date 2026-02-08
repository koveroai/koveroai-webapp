import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Switch } from "@/components/ui/Switch";
import { User, Bell, Globe, Lock, LogOut } from "lucide-react";

// Minimal switch component if not available in ui
function SimpleSwitch({ label }: { label?: string }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">{label}</span>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#22C3D9] cursor-pointer">
                <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
            </div>
        </div>
    )
}

export default function SettingsPage() {
    return (
        <div className="space-y-6 max-w-4xl">
            <h1 className="text-2xl font-bold text-deep-blue">Account Settings</h1>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2 text-deep-blue">
                        <User className="h-5 w-5" />
                        <CardTitle>Profile Information</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Full Name</label>
                            <input type="text" value="Jay Sharma" disabled className="w-full rounded-md border bg-gray-50 px-3 py-2 text-sm" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <input type="email" value="jay.sharma@example.com" disabled className="w-full rounded-md border bg-gray-50 px-3 py-2 text-sm" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Phone Number</label>
                            <input type="tel" value="+91 98765 43210" disabled className="w-full rounded-md border bg-gray-50 px-3 py-2 text-sm" />
                        </div>
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
                <CardContent className="space-y-4 max-w-md">
                    <SimpleSwitch label="Email Notifications" />
                    <SimpleSwitch label="SMS Alerts" />
                    <SimpleSwitch label="WhatsApp Updates" />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2 text-deep-blue">
                        <Globe className="h-5 w-5" />
                        <CardTitle>Language & Region</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 max-w-md">
                    <label className="text-sm font-medium">Preferred Language</label>
                    <select className="w-full rounded-md border px-3 py-2 text-sm">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Marathi</option>
                    </select>
                    <p className="text-xs text-gray-500">The platform will adapt to your preferred language where supported.</p>
                </CardContent>
            </Card>

            <div className="pt-4">
                <Button variant="danger" className="gap-2">
                    <LogOut className="h-4 w-4" /> Sign Out
                </Button>
            </div>
        </div>
    );
}
