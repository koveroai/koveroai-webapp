import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Building2, CreditCard, Users } from "lucide-react";

export default function HospitalSettings() {
    return (
        <div className="space-y-6 max-w-4xl">
            <h1 className="text-2xl font-bold text-deep-blue">Hospital Settings</h1>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2 text-deep-blue">
                        <Building2 className="h-5 w-5" />
                        <CardTitle>Hospital Profile</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Hospital Name</label>
                        <input type="text" value="City Care General Hospital" disabled className="mt-1 w-full rounded-md border bg-gray-50 px-3 py-2 text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Rohini ID</label>
                        <input type="text" value="HOSP-MUM-1024" disabled className="mt-1 w-full rounded-md border bg-gray-50 px-3 py-2 text-sm" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <textarea disabled className="mt-1 w-full rounded-md border bg-gray-50 px-3 py-2 text-sm" rows={2} defaultValue="12, Park Street, Andheri West, Mumbai, Maharashtra 400053"></textarea>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2 text-deep-blue">
                        <CreditCard className="h-5 w-5" />
                        <CardTitle>Bank Details</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Account Number</label>
                        <input type="text" value="XXXXXXXXXX9876" disabled className="mt-1 w-full rounded-md border bg-gray-50 px-3 py-2 text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">IFSC Code</label>
                        <input type="text" value="HDFC0001234" disabled className="mt-1 w-full rounded-md border bg-gray-50 px-3 py-2 text-sm" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2 text-deep-blue">
                        <Users className="h-5 w-5" />
                        <CardTitle>Staff Accounts</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 font-medium">Name</th>
                                <th className="px-4 py-2 font-medium">Role</th>
                                <th className="px-4 py-2 font-medium">Email</th>
                                <th className="px-4 py-2 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            <tr>
                                <td className="px-4 py-2">Dr. Rajesh Kumar</td>
                                <td className="px-4 py-2">Admin</td>
                                <td className="px-4 py-2">rajesh@citycare.com</td>
                                <td className="px-4 py-2 text-green-600">Active</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Sister Mary</td>
                                <td className="px-4 py-2">Nurse Head</td>
                                <td className="px-4 py-2">mary@citycare.com</td>
                                <td className="px-4 py-2 text-green-600">Active</td>
                            </tr>
                        </tbody>
                    </table>
                    <Button variant="outline" className="mt-4" disabled>Manage Staff (Admin Only)</Button>
                </CardContent>
            </Card>
        </div>
    );
}
