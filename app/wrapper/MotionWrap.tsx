"use client";

import { motion } from "framer-motion";

export default function MotionWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
