import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Shield, Globe, Mail, Save } from "lucide-react";

export default function AdminSettings() {
    return (
        <div className="space-y-6 max-w-4xl">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-deep-blue">System Settings</h1>
                <Button className="bg-deep-blue gap-2"><Save className="h-4 w-4" /> Save Changes</Button>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2 text-deep-blue">
                        <Globe className="h-5 w-5" />
                        <CardTitle>General Configuration</CardTitle>
                    </div>
                    <CardDescription>Platform-wide settings and preferences.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Platform Name</label>
                        <input type="text" defaultValue="Kovero.AI" className="mt-1 w-full rounded-md border bg-white px-3 py-2 text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Support Email</label>
                        <input type="email" defaultValue="support@kovero.ai" className="mt-1 w-full rounded-md border bg-white px-3 py-2 text-sm" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Maintenance Mode</label>
                        <div className="flex items-center gap-2 mt-2">
                            <input type="checkbox" className="toggle" />
                            <span className="text-sm text-gray-500">Enable maintenance mode (only admins can login)</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2 text-deep-blue">
                        <Shield className="h-5 w-5" />
                        <CardTitle>Security & Access</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                        <div>
                            <p className="font-medium text-sm">Two-Factor Authentication (2FA)</p>
                            <p className="text-xs text-gray-500">Enforce 2FA for all admin and TPA accounts.</p>
                        </div>
                        <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                        <div>
                            <p className="font-medium text-sm">Session Timeout</p>
                            <p className="text-xs text-gray-500">Auto-logout inactive users.</p>
                        </div>
                        <select className="rounded-md border text-sm p-1">
                            <option>15 mins</option>
                            <option>30 mins</option>
                            <option>1 hour</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-sm">Password Policy</p>
                            <p className="text-xs text-gray-500">Require strong passwords (min 12 chars, special chars).</p>
                        </div>
                        <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2 text-deep-blue">
                        <Mail className="h-5 w-5" />
                        <CardTitle>Email Notifications</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Send welcome email to new users</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Send claim status updates instantly</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" checked />
                        <span className="text-sm">Weekly admin digest</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
