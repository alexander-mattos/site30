import type { ReactNode } from "react";

type BlogEditorialProps = {
    children: ReactNode;
    preset?: "short" | "long";
};

export function BlogEditorial({
    children,
    preset = "long",
}: BlogEditorialProps) {
    return (
        <article
            data-preset={preset}
            className="
        prose prose-neutral dark:prose-invert max-w-none
        prose-leading-relaxed
        blog-editorial
      "
        >
            {children}
        </article>
    );
}
