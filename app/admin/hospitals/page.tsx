import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Search, MapPin } from "lucide-react";

export default function AdminHospitals() {
    const hospitals = [
        { id: 1, name: "Apollo Hospital", city: "Mumbai", tier: "Tier 1", status: "Active", rohinId: "HOSP-MUM-1001" },
        { id: 2, name: "City Care General", city: "Pune", tier: "Tier 2", status: "Active", rohinId: "HOSP-PUN-2022" },
        { id: 3, name: "Sunrise Nursing Home", city: "Nashik", tier: "Tier 3", status: "Suspended", rohinId: "HOSP-NAS-3045" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-deep-blue">Hospital Network</h1>
                <Button className="bg-deep-blue">Onboard Hospital</Button>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Registered Hospitals</CardTitle>
                    <div className="relative w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <input type="text" placeholder="Search hospitals..." className="w-full pl-9 h-9 rounded-md border text-sm" />
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-500 border-b">
                            <tr>
                                <th className="px-6 py-3 font-medium">Hospital Name</th>
                                <th className="px-6 py-3 font-medium">Location</th>
                                <th className="px-6 py-3 font-medium">Tier</th>
                                <th className="px-6 py-3 font-medium">Rohini ID</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {hospitals.map((hospital) => (
                                <tr key={hospital.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">{hospital.name}</td>
                                    <td className="px-6 py-4 flex items-center gap-1"><MapPin className="h-3 w-3" /> {hospital.city}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant="secondary" className="bg-gray-100">{hospital.tier}</Badge>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-xs">{hospital.rohinId}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant={hospital.status === "Active" ? "success" : "destructive"}>
                                            {hospital.status}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Button variant="outline" size="sm">Manage</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    );
}
