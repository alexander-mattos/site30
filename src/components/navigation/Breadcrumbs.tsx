import Link from "next/link";

type Crumb = {
    href: string;
    label: string;
};

type BreadcrumbsProps = {
    items: Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            className="mb-4 md:mb-6 text-[11px] md:text-xs text-[#777]"
        >
            <ol className="flex flex-wrap items-center gap-1">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={item.href} className="flex items-center gap-1">
                            {!isLast ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-[#890b23] transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="font-medium text-[#444]">{item.label}</span>
                            )}
                            {!isLast && <span className="text-[#aaa]">/</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
