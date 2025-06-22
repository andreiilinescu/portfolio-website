import HeaderSecondary from "../components/HeaderSecondary";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../lib/posts";
const posts = getAllPosts("projects");
export default function Projects() {
  return (
    <div className="w-full h-full bg-[var(--background)]">
      <div className="flex flex-col items-center      min-h-screen ">
        <div className="max-w-2xl w-full z-50 py-2">
          <HeaderSecondary />
          <div className="pt-16 px-4 sm:px-8 lg:px-10">
            <h1 className="font-bold text-[var(--foreground)] text-3xl md:text-5xl tracking-tight mb-1 flex  transition-opacity duration-600  opacity-100 ease-in ">
              projects
            </h1>
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} type="projects" />
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
