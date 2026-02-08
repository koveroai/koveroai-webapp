import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { MapPin, Phone } from "lucide-react";

export default function TPAHospitals() {
    const hospitals = [
        { id: 1, name: "Apollo Hospital", city: "Mumbai", tier: "Tier 1", status: "Active", claims: 450 },
        { id: 2, name: "City Care General", city: "Pune", tier: "Tier 2", status: "Active", claims: 120 },
        { id: 3, name: "Sunrise Nursing Home", city: "Nashik", tier: "Tier 3", status: "Suspended", claims: 15 },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-deep-blue">Network Hospitals</h1>
                <Button className="bg-deep-blue">Onboard New Hospital</Button>
            </div>

            <div className="grid gap-4">
                {hospitals.map(hospital => (
                    <Card key={hospital.id}>
                        <CardContent className="p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                                    IMG
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">{hospital.name}</h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {hospital.city}</span>
                                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">{hospital.tier}</Badge>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="text-center">
                                    <p className="text-xs text-gray-500">Claims (Month)</p>
                                    <p className="font-bold text-lg">{hospital.claims}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xs text-gray-500">Status</p>
                                    <Badge variant={hospital.status === "Active" ? "success" : "destructive"}>{hospital.status}</Badge>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline">View Details</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
