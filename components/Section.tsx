import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function Section({
  id,
  title,
  subtitle,
  children
}: PropsWithChildren<{ id: string; title: string; subtitle?: string }>) {
  return (
    <section id={id} className="section container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        {subtitle && <p className="text-gray-600 mt-2 max-w-2xl">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </motion.div>
    </section>
  );
}
