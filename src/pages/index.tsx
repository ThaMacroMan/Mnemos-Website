import Head from "next/head";
import Layout from "@/components/Layout";
import { CardanoWallet } from "@meshsdk/react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mnemos | Anyone Can Build on Cardano</title>
        <meta
          name="description"
          content="You don't need to be a programmer. Just describe what you want to build and AI will create it for you. Start building on Cardano today."
        />
      </Head>

      {/* Hero Section */}
      <motion.section
        className="text-center mb-40"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="text-lg md:text-xl text-emerald-400 font-semibold mb-4">
            ✨ No Programming Required ✨
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent"
          variants={fadeInUp}
        >
          Build on Cardano with AI and Mnemos
        </motion.h1>

        <motion.p
          className="max-w-4xl mx-auto text-2xl md:text-3xl text-gray-200 mb-16 leading-relaxed font-light"
          variants={fadeInUp}
        >
          <strong className="text-white">Anyone</strong> can build blockchain
          apps now. Just tell AI what you want, and it builds it for you.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6 mb-20"
          variants={fadeInUp}
        >
          <motion.a
            href="/docs/getting-started-with-ai-tools"
            className="px-12 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-2xl font-bold text-2xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Building Now
          </motion.a>
          <motion.a
            href="/docs/ai-developer-revolution"
            className="px-12 py-6 border-2 border-gray-600 rounded-2xl text-gray-300 hover:bg-gray-700 hover:text-white font-bold text-2xl transition-all duration-300 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn How
          </motion.a>
        </motion.div>

        {/* Social Proof */}
        <motion.div className="text-center text-gray-400" variants={fadeInUp}>
          <p className="text-lg mb-4">Join thousands already building</p>
          <div className="flex justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Artists creating NFT platforms</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Businesses building DAOs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Students learning DeFi</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Simple Demo */}
      <motion.section
        className="mb-40"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-8"
          variants={fadeInUp}
        >
          It's Really This <span className="text-emerald-400">Simple</span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          You don't write code. You just describe what you want in plain
          English.
        </motion.p>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12"
            variants={fadeInUp}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <span className="text-blue-200 font-semibold">
                      You say:
                    </span>
                  </div>
                  <p className="text-white text-xl italic leading-relaxed">
                    "I want to create a simple app where people can send ADA to
                    each other with a nice interface."
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-r from-emerald-900/50 to-green-900/50 rounded-2xl p-8 border border-emerald-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <span className="text-emerald-200 font-semibold">
                      AI builds:
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-white">Complete working app</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-white">
                        Beautiful user interface
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-white">Wallet integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-white">
                        Ready to use in minutes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Anyone Can Build */}
      <motion.section
        className="mb-40"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-8"
          variants={fadeInUp}
        >
          <span className="text-emerald-400">Anyone</span> Means Anyone
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          Your background doesn't matter. Your age doesn't matter. Your
          experience doesn't matter.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Never Touched Code",
              description:
                "Perfect! You won't need to learn programming syntax or complex concepts.",
              icon: "🌱",
              color: "from-green-500/20 to-emerald-500/20",
            },
            {
              title: "Creative Professional",
              description:
                "Your artistic vision + AI's technical skills = Amazing blockchain projects.",
              icon: "🎨",
              color: "from-purple-500/20 to-pink-500/20",
            },
            {
              title: "Business Owner",
              description:
                "Turn your business ideas into blockchain solutions without hiring developers.",
              icon: "💼",
              color: "from-blue-500/20 to-cyan-500/20",
            },
            {
              title: "Student or Educator",
              description:
                "Learn by building. Create educational tools and explore blockchain concepts.",
              icon: "🎓",
              color: "from-yellow-500/20 to-orange-500/20",
            },
            {
              title: "Retiree with Ideas",
              description:
                "Your life experience + modern AI tools = Valuable contributions to blockchain.",
              icon: "🧓",
              color: "from-indigo-500/20 to-purple-500/20",
            },
            {
              title: "Curious Teenager",
              description:
                "Start building the future now. No computer science degree required.",
              icon: "🚀",
              color: "from-red-500/20 to-pink-500/20",
            },
          ].map((persona, _index) => (
            <motion.div
              key={persona.title}
              className={`bg-gradient-to-br ${persona.color} backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center`}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-6xl mb-6">{persona.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {persona.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {persona.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Live Demo */}
      <motion.section
        className="mb-40"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="bg-gradient-to-br from-sky-900/20 to-emerald-900/20 backdrop-blur-sm border border-sky-700/50 rounded-3xl p-16 text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8"
            variants={fadeInUp}
          >
            Try It Right Now
          </motion.h2>
          <motion.p
            className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            This wallet connector was built by AI in 30 seconds. Connect yours
            and see how easy it is.
          </motion.p>
          <motion.div className="inline-block mb-8" variants={scaleIn}>
            <CardanoWallet isDark={true} />
          </motion.div>
          <motion.p className="text-gray-400 text-lg" variants={fadeInUp}>
            No setup required. Just click and connect.
          </motion.p>
        </div>
      </motion.section>

      {/* Simple CTA */}
      <motion.section
        className="text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-8"
          variants={fadeInUp}
        >
          Ready to Start?
        </motion.h2>
        <motion.p
          className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          It takes 5 minutes to set up. 15 minutes to build your first app. A
          lifetime to explore what's possible.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6 mb-12"
          variants={fadeInUp}
        >
          <motion.a
            href="/docs/getting-started-with-ai-tools"
            className="px-12 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-2xl font-bold text-2xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Building Now
          </motion.a>
          <motion.a
            href="https://discord.gg/meshjs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-2xl font-bold text-2xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Community
          </motion.a>
        </motion.div>

        <motion.div className="text-gray-400 text-lg" variants={fadeInUp}>
          <p>Questions? Stuck? Need help?</p>
          <p className="mt-2">
            Our community is here to support you every step of the way.
          </p>
        </motion.div>
      </motion.section>
    </Layout>
  );
}
