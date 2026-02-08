"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FileText, Download, Eye, Shield, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DocumentsPage() {
    const [filter, setFilter] = useState("All");

    const documents = [
        { id: 1, name: "Policy-Certificate-2026.pdf", type: "Policies", date: "Feb 01, 2026", size: "1.2 MB" },
        { id: 2, name: "Claim-C102-Discharge.pdf", type: "Medical", date: "Feb 08, 2026", size: "2.4 MB" },
        { id: 3, name: "Claim-C102-Bills.pdf", type: "Bills", date: "Feb 08, 2026", size: "0.8 MB" },
        { id: 4, name: "KYC-Aadhar-Card.jpg", type: "ID Proof", date: "Jan 15, 2025", size: "0.5 MB" },
        { id: 5, name: "Health-Checkup-Report.pdf", type: "Reports", date: "Dec 10, 2025", size: "1.8 MB" },
    ];

    const filters = ["All", "Policies", "Medical", "Bills", "ID Proof", "Reports"];

    const filteredDocs = filter === "All" ? documents : documents.filter(doc => doc.type === filter);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-deep-blue">My Documents</h1>
                <Button variant="outline"><UploadIcon className="mr-2 h-4 w-4" /> Upload</Button>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
                {filters.map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={cn(
                            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors border",
                            filter === f
                                ? "bg-deep-blue text-white border-deep-blue"
                                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                        )}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="grid gap-4">
                {filteredDocs.map((doc) => (
                    <Card key={doc.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                                    <FileText className="h-5 w-5 text-gray-500" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{doc.name}</p>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <Badge variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs font-normal">{doc.type}</Badge>
                                        <span className="text-xs text-gray-400">• {doc.date}</span>
                                        <span className="text-xs text-gray-400">• {doc.size}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="ghost" size="icon" title="View">
                                    <Eye className="h-4 w-4 text-gray-500" />
                                </Button>
                                <Button variant="ghost" size="icon" title="Download">
                                    <Download className="h-4 w-4 text-gray-500" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

function UploadIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
    )
}
