import { formatPostDate, type BlogPost } from "@/content/blog";

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
        {post.category}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-sm text-muted">
        Published {formatPostDate(post.publishedAt)} · Updated {formatPostDate(post.updatedAt)}
      </p>
      <div className="mt-10 space-y-10">
        {post.sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="text-2xl font-semibold">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-7 text-ink/90">
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-ink/90">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  );
}
