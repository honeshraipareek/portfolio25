'use client'
import Link from "next/link"
import { FolderSimple } from "@phosphor-icons/react"

export default function ProjectFolder({ titel, slug }) {
    return (
        <Link href={`/projects/${slug}`} className="flex items-center gap-2 p-4 rounded-lg hover:bg-gray-100">
            <FolderSimple size={24} weight="bold" className="text-gray-700" />
            <span className="text-gray-700">{titel}</span>
        </Link>
    )
}
// This component is a simple folder link that uses the Phosphor Icons library for the folder icon.