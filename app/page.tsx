import Link from "next/link";
import { User, Building2, FileText, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

export default function Home() {
  const roles = [
    {
      title: "User",
      description: "Policyholders & Beneficiaries",
      href: "/user/dashboard",
      icon: User,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Hospital",
      description: "Healthcare Providers",
      href: "/hospital/dashboard",
      icon: Building2,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
    {
      title: "TPA",
      description: "Third Party Administrators",
      href: "/tpa/dashboard",
      icon: FileText,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Admin",
      description: "System Administration",
      href: "/admin/dashboard",
      icon: ShieldCheck,
      color: "text-slate-600",
      bgColor: "bg-slate-50",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-soft-bg p-6">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-deep-blue md:text-5xl">
          Kovero.AI
        </h1>
        <p className="text-xl text-gray-600">
          Intelligent AI-Powered TPA Platform
        </p>
      </div>

      <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((role) => (
          <Link key={role.title} href={role.href} className="transition-transform hover:scale-105">
            <Card className="h-full border-2 border-transparent hover:border-[#22C3D9]/20 cursor-pointer">
              <CardHeader className="flex flex-col items-center gap-4 pb-2 text-center">
                <div className={`rounded-full p-4 ${role.bgColor}`}>
                  <role.icon className={`h-8 w-8 ${role.color}`} />
                </div>
                <CardTitle className="text-xl">{role.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  {role.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-sm text-gray-500">
        Select a role to enter the portal
      </div>
    </div>
  );
}
