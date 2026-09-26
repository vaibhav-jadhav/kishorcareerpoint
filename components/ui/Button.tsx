import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "accent" | "ghost" | "light";
  external?: boolean;
  className?: string;
};

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  accent: "bg-accent text-white hover:bg-accent-dark",
  ghost: "border border-white/30 text-white hover:bg-white/10",
  light: "bg-white text-brand hover:bg-[#e7f2fb]",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
