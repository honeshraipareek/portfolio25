'use client'
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { X } from "@phosphor-icons/react"

export default function FolderModal({ title, children }) {
    const router = useRouter()

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="relative w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                        onClick={() => router.back()}
                    >
                        <X size={24} weight="bold" />
                    </button>
                    <h2 className="text-xl font-bold">{title}</h2>
                    <div className="mt-4">{children}</div>
                </div>
            </motion.div>
        </div>
    )
}