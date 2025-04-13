import FolderModal from "@/components/FolderModal";
import ProjectFolder from "@/components/ProjectFolder";
import projects from "@/data/projects";

export default function WorkPage() {
    return (
        <FolderModal title="Projects">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {projects.map((project) => (
                    <ProjectFolder
                        key={project.slug}
                        title={project.title}
                        slug={project.slug}
                    />
                ))}
            </div>
        </FolderModal>
    )
}