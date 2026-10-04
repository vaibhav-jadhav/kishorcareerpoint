import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { Container } from "@/components/ui/Container";
import { getPost, posts } from "@/content/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <Container className="py-10 sm:py-14">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline">
        <span aria-hidden="true">←</span> All articles
      </Link>
      <div className="mt-6">
        <BlogArticle post={post} />
      </div>
    </Container>
  );
}
