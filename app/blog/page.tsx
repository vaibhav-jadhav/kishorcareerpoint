import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { blogIntro, formatPostDate, posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: blogIntro,
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" description={blogIntro} />
      <Container className="py-14">
        <ul className="grid gap-5">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="rounded-3xl border border-line p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                  {post.category} · {formatPostDate(post.updatedAt)}
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  <Link href={`/blog/${post.slug}`} className="hover:text-brand">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{post.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
