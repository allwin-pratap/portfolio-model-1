import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedWrapperProps {
  children: ReactNode;
  customStyle?: any;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ customStyle, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 100 }}
      transition={{ duration: 1.5 }}
      className={customStyle}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
