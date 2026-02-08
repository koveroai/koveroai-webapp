import Link from "next/link";
import { User, Building2, FileText, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

export default function Home() {
  const roles = [
    {
      title: "User",
      description: "Policyholders & Beneficiaries",
      href: "/user/dashboard",
      icon: User,
      gradient: "from-blue-500 to-cyan-400",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },
    {
      title: "Hospital",
      description: "Healthcare Providers",
      href: "/hospital/dashboard",
      icon: Building2,
      gradient: "from-rose-500 to-pink-400",
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-600",
    },
    {
      title: "TPA",
      description: "Third Party Administrators",
      href: "/tpa/dashboard",
      icon: FileText,
      gradient: "from-purple-500 to-indigo-400",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-600",
    },
    {
      title: "Admin",
      description: "System Administration",
      href: "/admin/dashboard",
      icon: ShieldCheck,
      gradient: "from-slate-600 to-slate-400",
      iconBg: "bg-slate-500/10",
      iconColor: "text-slate-600",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden gradient-hero">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#22C3D9]/20 to-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-[#22C3D9]/20 rounded-full blur-3xl animate-float stagger-2" />
      
      <div className="relative z-10 flex flex-col items-center p-6">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-sm border border-gray-100 mb-6">
            <Sparkles className="h-4 w-4 text-[#22C3D9]" />
            <span className="text-sm font-medium text-gray-600">AI-Powered Claims Processing</span>
          </div>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-deep-blue md:text-6xl">
            Kovero<span className="text-[#22C3D9]">.AI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Intelligent TPA Platform for seamless healthcare claims management
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => (
            <Link 
              key={role.title} 
              href={role.href} 
              className={`animate-slide-up stagger-${index + 1}`}
              style={{ animationFillMode: 'backwards' }}
            >
              <Card className="group h-full border border-gray-100/80 bg-white/80 backdrop-blur-sm cursor-pointer card-hover overflow-hidden">
                {/* Gradient top border */}
                <div className={`h-1 w-full bg-gradient-to-r ${role.gradient}`} />
                
                <CardHeader className="flex flex-col items-center gap-4 pb-2 pt-6 text-center">
                  <div className={`rounded-2xl p-4 ${role.iconBg} transition-transform group-hover:scale-110`}>
                    <role.icon className={`h-8 w-8 ${role.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#22C3D9] transition-colors">
                    {role.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-6">
                  <CardDescription className="text-base">
                    {role.description}
                  </CardDescription>
                  <div className="mt-4 text-sm font-medium text-[#22C3D9] opacity-0 group-hover:opacity-100 transition-opacity">
                    Enter Portal →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer hint */}
        <div className="mt-12 text-sm text-gray-500 animate-fade-in stagger-4" style={{ animationFillMode: 'backwards' }}>
          Select a role to enter the portal
        </div>
      </div>
    </div>
  );
}
