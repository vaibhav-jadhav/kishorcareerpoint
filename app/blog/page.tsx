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
      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <ul className="grid gap-5">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="group relative rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_16px_32px_-18px_rgba(0,90,170,0.4)] sm:p-8">
                  <p className="flex flex-wrap items-center gap-2 text-xs font-bold text-muted">
                    <span className="rounded-full bg-brand-soft px-2.5 py-1 uppercase tracking-wide text-brand">
                      {post.category}
                    </span>
                    {formatPostDate(post.updatedAt)}
                  </p>
                  <h2 className="mt-3 text-xl font-extrabold leading-snug text-brand-dark sm:text-2xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="after:absolute after:inset-0 after:content-[''] group-hover:text-brand"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{post.description}</p>
                  <span className="mt-4 inline-block text-sm font-bold text-brand" aria-hidden="true">
                    Read article →
                  </span>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
