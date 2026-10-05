import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPost, posts } from "@/content/blog";
import { site } from "@/content/site";
import { pageMetadata, shareImage } from "@/lib/seo";

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
  const path = `/blog/${post.slug}`;
  return {
    ...pageMetadata({ title: post.title, description: post.description, path }),
    openGraph: {
      title: post.title,
      description: post.description,
      url: path,
      siteName: site.name,
      locale: "en_IN",
      type: "article",
      images: [shareImage],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
          image: `${site.url}/opengraph-image`,
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: {
            "@type": "Organization",
            name: site.name,
            logo: { "@type": "ImageObject", url: `${site.url}/brand/logo.png` },
          },
        }}
      />
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline">
        <span aria-hidden="true">←</span> All articles
      </Link>
      <div className="mt-6">
        <BlogArticle post={post} />
      </div>
    </Container>
  );
}
