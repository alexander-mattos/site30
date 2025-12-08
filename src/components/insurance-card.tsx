// src/components/insurance-card.tsx

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type InsuranceCardProps = {
    title: string;
    description: string;
    bulletPoints?: string[];
    href?: string;
    ctaLabel?: string;
    badge?: string;
};

export function InsuranceCard({
    title,
    description,
    bulletPoints,
    href,
    ctaLabel = "Ver detalhes",
    badge,
}: InsuranceCardProps) {
    const Wrapper = href ? Link : "div";

    return (
        <Card className="h-full flex flex-col">
            <CardHeader className="space-y-1">
                <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-lg">{title}</CardTitle>
                    {badge && (
                        <span className="px-2 py-1 text-xs text-center rounded-full bg-primary/10 text-primary">
                            {badge}
                        </span>
                    )}
                </div>
            </CardHeader>

            <CardContent className="space-y-3 flex-1">
                <p className="text-base text-slate-900 text-muted-foreground">{description}</p>
                {bulletPoints && bulletPoints.length > 0 && (
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                        {bulletPoints.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                )}
            </CardContent>

            <CardFooter>
                {href ? (
                    <Button asChild className="w-full">
                        <Wrapper href={href}>{ctaLabel}</Wrapper>
                    </Button>
                ) : (
                    <Button className="w-full">{ctaLabel}</Button>
                )}
            </CardFooter>
        </Card>
    );
}
