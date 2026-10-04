import { formatPostDate, type BlogPost } from "@/content/blog";

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto max-w-3xl">
      <p className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand">
        {post.category}
      </p>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">
        {post.title}
      </h1>
      <span className="mt-5 block h-1.5 w-16 rounded-full bg-sun" aria-hidden="true" />
      <p className="mt-4 text-sm text-muted">
        Published {formatPostDate(post.publishedAt)} · Updated {formatPostDate(post.updatedAt)}
      </p>
      <div className="mt-10 space-y-10">
        {post.sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="text-xl font-extrabold text-brand-dark sm:text-2xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-7 text-ink/90">
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-brand text-base leading-7 text-ink/90">
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
