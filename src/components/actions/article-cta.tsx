type CtaButton = {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
};

export type ArticleCtaProps = {
    eyebrow?: string; // ex: "Fale com um especialista"
    title: string;
    description?: string;
    primary: CtaButton;
    secondary?: CtaButton;
};

export function ArticleCta({
    eyebrow,
    title,
    description,
    primary,
    secondary,
}: ArticleCtaProps) {
    return (
        <section
            className="
        mt-12
        rounded-2xl border
        bg-background
        p-6 md:p-8
        shadow-sm
      "
        >
            {eyebrow ? (
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {eyebrow}
                </p>
            ) : null}

            <div className="mt-2 flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                    {title}
                </h2>

                {description ? (
                    <p className="text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                ) : null}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                    href={primary.href}
                    className="
            inline-flex items-center justify-center
            rounded-md
            bg-[#C4162C] px-6 py-3
            text-[#F5F5F5] font-medium
            hover:bg-[#B11226]
            transition
          "
                >
                    {primary.label}
                </a>

                {secondary ? (
                    <a
                        href={secondary.href}
                        className="
              inline-flex items-center justify-center
              rounded-md
              border border-[#C4162C]
              px-6 py-3
              text-[#C4162C] font-medium
              hover:bg-[#C4162C]/10
              transition
            "
                    >
                        {secondary.label}
                    </a>
                ) : null}
            </div>
        </section>
    );
}
