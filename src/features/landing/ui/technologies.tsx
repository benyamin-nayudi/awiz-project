import { useTheme } from '@/shared/providers';
import { Code, Database, Globe, Palette, TestTube, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const technologies = [
  {
    name: 'Next.js 16',
    description: 'React framework for production',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    delay: 0.1,
  },
  {
    name: 'React 19',
    description: 'UI library with latest features',
    icon: Code,
    color: 'from-cyan-500 to-blue-500',
    delay: 0.2,
  },
  {
    name: 'TypeScript',
    description: 'Type-safe development',
    icon: Code,
    color: 'from-blue-600 to-purple-600',
    delay: 0.3,
  },
  {
    name: 'Prisma',
    description: 'Modern database toolkit',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    delay: 0.4,
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    delay: 0.5,
  },
  {
    name: 'Framer Motion',
    description: 'Production-ready animations',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    delay: 0.6,
  },
  {
    name: 'Storybook',
    description: 'Component documentation',
    icon: TestTube,
    color: 'from-orange-500 to-red-500',
    delay: 0.7,
  },
];

function Technologies() {
  const { actualTheme } = useTheme();

  return (
    <>
      <motion.div
        className="mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.h2
          className={`mb-4 text-center text-4xl font-bold md:text-5xl ${
            actualTheme === 'dark' ? 'text-white' : 'text-black'
          }`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Built With Modern Tech Stack
        </motion.h2>

        <motion.p
          className={`mb-16 text-center text-lg ${
            actualTheme === 'dark' ? 'text-white' : 'text-black'
          }`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          Leveraging the latest technologies for optimal performance and developer experience
        </motion.p>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map(tech => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="group"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.5 + tech.delay,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                  whileHover={{
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    scale: 1.02,
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-linear-to-br ${tech.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`mx-auto mb-6 h-16 w-16 bg-linear-to-br ${tech.color} flex items-center justify-center rounded-xl`}
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.6 },
                    }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    className={`mb-3 text-center text-xl font-bold ${
                      actualTheme === 'dark' ? 'text-white' : 'text-black'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7 + tech.delay }}
                  >
                    {tech.name}
                  </motion.h3>

                  <motion.p
                    className="text-center text-sm leading-relaxed text-slate-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 + tech.delay }}
                  >
                    {tech.description}
                  </motion.p>

                  {/* Floating particles effect */}
                  <motion.div
                    className="absolute top-4 right-4 h-2 w-2 rounded-full bg-white/30"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: tech.delay,
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

export default Technologies;
