import { getAllPosts, getPostBySlug } from '../../lib/posts';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import HeaderSecondary from '@/app/components/HeaderSecondary';
import Footer from '@/app/components/Footer';
// export async function generateStaticParams() {
//   const posts = getAllPosts();
//   return posts.map((post) => ({ slug: post.slug }));
// }

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  const { content, frontmatter } = await compileMDX({
    source: post.content,
  });

  return (
    <div className="w-full h-full bg-[var(--background)]">
                <div  className="flex flex-col items-center      min-h-screen ">
                    <div className='max-w-2xl w-full z-50 py-2'>
                            <HeaderSecondary />
                        <div className="pt-16 px-4 sm:px-8 lg:px-10">
                            <h1 className="font-bold text-[var(--foreground)] text-3xl md:text-5xl tracking-tight mb-1 flex  transition-opacity duration-600  opacity-100 ease-in ">{post.metadata.title}</h1>
                            <p className="text-sm text-[var(--muted)] mb-6">
                                {new Date(post.metadata.date).toLocaleDateString()}    
                            </p>
                            <div className="prose max-w-none text-[var(--foreground)]">
                                {content}
                            </div>
                        </div>
                        <div className='px-6 sm:px-8 lg:px-10 py-10'>
                            <hr  className='mb-3 border-[var(--foreground)] opacity-10' />
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
  );
}
