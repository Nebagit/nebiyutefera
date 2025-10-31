import { motion } from "framer-motion";
import { Brain, Shield, TrendingUp } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: "Machine Learning Algorithms",
      description:
        "Focus on optimizing learning models, interpretability, and efficiency to advance the capabilities of AI systems.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Responsible and Human-Centered AI",
      description:
        "Ethics, fairness, and governance of AI for society, ensuring technology serves humanity with integrity.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "AI in Fintech",
      description:
        "Using AI for predictive analytics, fraud detection, and financial inclusion to democratize financial services.",
      color: "from-blue-600 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* === Page Header === */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-400">
            Research Interest
          </h2>
          <div className="mx-auto h-1 w-24 bg-blue-500 rounded-full mb-6"></div>
        </div>

        {/* === Hero Section === */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Exploring the frontiers of AI and its impact on human progress.
          </p>
        </motion.div>

        {/* === Research Areas Grid === */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                <div className="h-full bg-[hsl(var(--research-card-bg))] rounded-2xl border border-blue-500 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Icon Container */}
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Research;
