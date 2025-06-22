import HeaderSecondary from "../components/HeaderSecondary";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { getAllProjects } from "../lib/projects";
export default function Projects() {
  const projects = getAllProjects();
  return (
    <div className="w-full h-full bg-[var(--background)]">
      <div className="flex flex-col items-center      min-h-screen ">
        <div className="max-w-2xl w-full z-50 py-2">
          <HeaderSecondary />
          <div className="pt-16 px-4 sm:px-8 lg:px-10">
            <h1 className="font-bold text-[var(--foreground)] text-3xl md:text-5xl tracking-tight mb-1 flex  transition-opacity duration-600  opacity-100 ease-in ">
              projects
            </h1>
            <div className="space-y-4 pt-10">
              {projects.map((post) => (
                <ProjectCard key={post.id} project={post} slug={post.id} />
              ))}
            </div>
          </div>
          <div className="px-6 sm:px-8 lg:px-10 py-10">
            <hr className="mb-3 border-[var(--foreground)] opacity-10" />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
