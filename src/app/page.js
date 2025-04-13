import FolderIcon from "@/components/FolderIcon";
import Dock from "@/components/Dock";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-300">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl p-8 text-center bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-600 mb-8">I am a UX Designer and Frontend Developer.</p>
        <Dock />
        <FolderIcon href="/work"/>
      </div>
    </main>
  );
}