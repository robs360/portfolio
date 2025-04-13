import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const RepeatingScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: false, // ← THIS makes it happen every time
    amount: 0.3, // 0.3 = 30% of element is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="your-classname text-white overflow-x-hidden"
    >
      I animate every time I scroll into view!
    </motion.div>
  );
};

export default RepeatingScrollAnimation