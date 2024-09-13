import { motion } from "framer-motion";
import React from "react";

type FadeUpProps = {
  children: React.ReactNode;
  delay?: number;
};

const FadeUp: React.FC<FadeUpProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
