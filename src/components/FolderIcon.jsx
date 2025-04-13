'use client'
import Link from "next/link";
import { FolderSimple } from "@phosphor-icons/react";

export default function FolderIcon({ label, href}) { 
    return (
        <Link href={href}>
            <div className="flex">
                <FolderSimple size={64} className="text-blue-500 drop-shadow-md" />
                <p className="mt-2 text-sm font-medium">{label}</p>
            </div>
        
        </Link>
    )
}