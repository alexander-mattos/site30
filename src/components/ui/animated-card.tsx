"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedCardProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

function classNames(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay }}
            whileHover={{ y: -4, scale: 1.01 }}
            className={classNames(
                "bg-white/95 border border-[#890b23]/10 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl hover:border-[#890b23]/40 transition-all duration-200",
                className
            )}
        >
            {children}
        </motion.article>
    );
}
