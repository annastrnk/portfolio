import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizontalTitle({
  text,
  from = "0%",
  to = "-20%",
  tag: Tag = "h1",
  className = "",
}) {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <section className="horizontal-section">
      <motion.div style={{ x }}>
        <Tag className={`horizontal-title ${className}`}>{text}</Tag>
      </motion.div>
    </section>
  );
}
