import { Bell, Search } from "lucide-react";

export function TopBar({ role }: { role?: string }) {
    return (
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
            <div className="relative w-96">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search..."
                    disabled
                    className="h-9 w-full rounded-md border border-gray-200 bg-gray-50 pl-9 pr-4 text-sm outline-none focus:border-deep-blue focus:ring-1 focus:ring-deep-blue disabled:cursor-not-allowed disabled:opacity-50"
                />
            </div>
            <div className="flex items-center gap-4">
                <button className="relative text-gray-500 hover:text-gray-700">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-teal"></span>
                </button>
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                    <span className="text-sm font-medium text-gray-700">Hi, {role || "User"}</span>
                </div>
            </div>
        </header>
    )
}
