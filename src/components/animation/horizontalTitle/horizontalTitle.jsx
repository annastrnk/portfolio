import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";

export default function HorizontalTitle({
  text,
  from = "-70%",
  to = "70%",
  tag = "h1",
  className = "",
}) {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [from, to]);
  const Component = tag;

  return (
    <section className="horizontal-section">
      <motion.div style={{ x }}>
        <Component className={`horizontal-title ${className}`}>{text}</Component>
      </motion.div>
    </section>
  );
}

HorizontalTitle.propTypes = {
  text: PropTypes.string.isRequired,
  from: PropTypes.string,
  to: PropTypes.string,
  tag: PropTypes.string,
  className: PropTypes.string,
};
