import { motion } from 'motion/react';
import Link from 'next/link';
import { useTheme } from 'storybook/theming';

function LandingFooter() {
  const { actualTheme } = useTheme();
  return (
    <>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.div
          className="inline-block rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-sm"
          whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)' }}
          transition={{ duration: 0.2 }}
        >
          <p className={`${actualTheme === 'dark' ? 'text-white' : 'text-black'}`}>
            Ready to explore?
            <Link
              href="/dashboard"
              className="ml-2 font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              Enter Dashboard →
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default LandingFooter;
