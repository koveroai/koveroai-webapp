import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function PoliciesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-deep-blue">My Policies</h1>
            </div>

            <Tabs defaultValue="my-policies">
                <TabsList>
                    <TabsTrigger value="my-policies">My Policies</TabsTrigger>
                    <TabsTrigger value="discover">Discover</TabsTrigger>
                </TabsList>

                <TabsContent value="my-policies" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Active Policies</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative w-full overflow-auto">
                                <table className="w-full caption-bottom text-sm text-left">
                                    <thead className="[&_tr]:border-b">
                                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted text-gray-500">
                                            <th className="h-12 px-4 align-middle font-medium">Policy</th>
                                            <th className="h-12 px-4 align-middle font-medium">Insurer</th>
                                            <th className="h-12 px-4 align-middle font-medium">Sum Insured</th>
                                            <th className="h-12 px-4 align-middle font-medium">Type</th>
                                            <th className="h-12 px-4 align-middle font-medium">Status</th>
                                            <th className="h-12 px-4 align-middle font-medium text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="[&_tr:last-child]:border-0">
                                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td className="p-4 align-middle font-medium">POL-998877</td>
                                            <td className="p-4 align-middle">Star Health</td>
                                            <td className="p-4 align-middle">₹5,00,000</td>
                                            <td className="p-4 align-middle">Family Floater</td>
                                            <td className="p-4 align-middle"><Badge variant="default" className="bg-green-500">Active</Badge></td>
                                            <td className="p-4 align-middle text-right">
                                                <Link href="/user/policies/1">
                                                    <Button size="sm" variant="outline">View Details</Button>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td className="p-4 align-middle font-medium">POL-112233</td>
                                            <td className="p-4 align-middle">HDFC ERGO</td>
                                            <td className="p-4 align-middle">₹10,00,000</td>
                                            <td className="p-4 align-middle">Individual</td>
                                            <td className="p-4 align-middle"><Badge variant="default" className="bg-orange-500">Expiring Soon</Badge></td>
                                            <td className="p-4 align-middle text-right">
                                                <Link href="/user/policies/2">
                                                    <Button size="sm" variant="outline">View Details</Button>
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="discover" className="mt-6">
                    <div className="mb-6 rounded-lg bg-deep-blue p-6 text-white text-center">
                        <h2 className="text-xl font-bold">Confused which policy to choose?</h2>
                        <p className="mt-2 text-blue-100">Ask our AI assistant to find the best plan for your family.</p>
                        <Button className="mt-4 bg-[#22C3D9] hover:bg-[#22C3D9]/90 text-white">Ask Kovero AI</Button>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                            <Card key={i}>
                                <CardHeader>
                                    <CardTitle className="flex justify-between items-start">
                                        <span>Health Guard Gold</span>
                                        <ShieldCheck className="h-5 w-5 text-[#22C3D9]" />
                                    </CardTitle>
                                    <CardDescription>Bajaj Allianz</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                                        <li>Cashless Network</li>
                                        <li>No Claim Bonus</li>
                                        <li>Free Health Checkup</li>
                                    </ul>
                                </CardContent>
                                <CardFooter className="flex gap-2">
                                    <Button className="w-full" variant="outline">View Details</Button>
                                    <Button className="w-full" variant="secondary">Compare</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
