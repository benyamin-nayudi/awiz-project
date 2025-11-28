import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useTheme } from '@/shared/providers/theme-context';

function HeroSection() {
  const { actualTheme } = useTheme();

  return (
    <>
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className={`mb-8 text-6xl font-bold md:text-8xl transition-all duration-1000 ${
            actualTheme === 'dark'
              ? 'bg-linear-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent'
              : 'bg-linear-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent'
          }`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          AWIZ Project
        </motion.h1>

        <motion.p
          className={`mx-auto mb-12 max-w-2xl text-xl md:text-2xl transition-colors duration-1000 ${
            actualTheme === 'dark' 
              ? 'text-slate-300' 
              : 'text-slate-600'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          A modern full-stack application built with cutting-edge technologies
        </motion.p>

        {/* Large Dashboard Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/dashboard">
            <motion.button
              className={`group relative rounded-2xl px-12 py-6 text-2xl font-bold shadow-2xl transition-all duration-500 ${
                actualTheme === 'dark'
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white hover:shadow-blue-500/25'
                  : 'bg-linear-to-r from-blue-500 to-indigo-600 text-white hover:shadow-blue-400/30'
              }`}
              whileHover={{
                boxShadow: actualTheme === 'dark' 
                  ? '0 20px 40px rgba(59, 130, 246, 0.4)'
                  : '0 20px 40px rgba(99, 102, 241, 0.4)',
              }}
            >
              <span className="flex cursor-pointer items-center gap-4">
                Go To Dashboard
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-8 w-8" />
                </motion.div>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}

export default HeroSection;
