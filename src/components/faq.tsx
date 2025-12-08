// src/components/faq.tsx
"use client";

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

export type FAQItem = {
    question: string;
    answer: string;
};

type FAQProps = {
    items: FAQItem[];
    /** Se quiser um título acima do FAQ */
    title?: string;
};

export function FAQ({ items, title }: FAQProps) {
    if (!items?.length) return null;

    return (
        <section className="space-y-4">
            {title && <h2 className="text-2xl font-semibold">{title}</h2>}

            <Accordion type="single" collapsible className="w-full">
                {items.map((item, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-b last:border-b-0"
                    >
                        <AccordionTrigger className="text-left">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
