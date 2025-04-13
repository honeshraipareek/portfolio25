import projects from '@/data/projects.json';
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: p.slug,
    }));
}

export default function ProjectPage({ params }) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold">{project.title}</h1>
            <p>{project.description}</p>
            {/* Add more project details here */}
        </main>
    );
}