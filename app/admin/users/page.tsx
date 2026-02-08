import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Search, MoreHorizontal } from "lucide-react";

export default function AdminUsers() {
    const users = [
        { id: 1, name: "Rahul Gupta", role: "User", email: "rahul@example.com", status: "Active" },
        { id: 2, name: "Jay Sharma", role: "TPA", email: "jay@mediassist.com", status: "Active" },
        { id: 3, name: "Dr. Rajesh Kumar", role: "Hospital Admin", email: "rajesh@citycare.com", status: "Active" },
        { id: 4, name: "Amit Singh", role: "User", email: "amit@example.com", status: "Inactive" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-deep-blue">User Management</h1>
                <Button className="bg-deep-blue">Add User</Button>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>System Users</CardTitle>
                    <div className="relative w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <input type="text" placeholder="Search users..." className="w-full pl-9 h-9 rounded-md border text-sm" />
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-500 border-b">
                            <tr>
                                <th className="px-6 py-3 font-medium">Name</th>
                                <th className="px-6 py-3 font-medium">Role</th>
                                <th className="px-6 py-3 font-medium">Email</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">{user.name}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant="outline" className="bg-gray-50">{user.role}</Badge>
                                    </td>
                                    <td className="px-6 py-4">{user.email}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant={user.status === "Active" ? "success" : "secondary"}>
                                            {user.status}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
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
