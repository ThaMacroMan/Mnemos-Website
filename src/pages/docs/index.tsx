import Head from "next/head";
import Layout from "@/components/Layout";
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

export default function DocsIndex() {
  return (
    <Layout>
      <Head>
        <title>Your Friendly Guide to Building on Cardano | Mnemos</title>
        <meta
          name="description"
          content="Don't worry - we'll walk you through everything step by step. No technical background needed!"
        />
      </Head>

      <motion.div
        className="max-w-4xl mx-auto"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <div className="text-6xl mb-6">👋</div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Hey there, future builder!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't worry if you've never built anything before. We'll walk you
            through everything step by step.
            <span className="text-emerald-400 font-semibold">
              {" "}
              No technical background needed!
            </span>
          </p>
          <div className="bg-gradient-to-r from-emerald-900/30 to-sky-900/30 border border-emerald-700/50 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg text-emerald-200">
              ✨ <strong>Promise:</strong> If you can describe what you want to
              build, AI can build it for you.
            </p>
          </div>
        </motion.div>

        {/* Start Here Section */}
        <motion.div className="mb-20" variants={fadeInUp}>
          <h2 className="text-4xl font-bold mb-8 text-center">
            🚀 <span className="text-emerald-400">Start Here</span> (Takes 5
            minutes)
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-700/50 rounded-2xl p-8 text-center"
              whileHover={{ scale: 1.02, y: -5 }}
              variants={fadeInUp}
            >
              <div className="text-6xl mb-6">🤔</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                "Wait, what's happening?"
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Confused about this whole AI + blockchain thing? Perfect! Start
                here to understand why this is such a big deal.
              </p>
              <a
                href="/docs/ai-developer-revolution"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Tell me more! →
              </a>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 border border-emerald-700/50 rounded-2xl p-8 text-center"
              whileHover={{ scale: 1.02, y: -5 }}
              variants={fadeInUp}
            >
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-300">
                "I'm ready to build!"
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Skip the theory and jump straight into building. We'll have you
                creating your first app in 30 minutes.
              </p>
              <a
                href="/docs/getting-started-with-ai-tools"
                className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
              >
                Let's do this! →
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* What You'll Learn */}
        <motion.div className="mb-20" variants={fadeInUp}>
          <h2 className="text-4xl font-bold mb-8 text-center">
            📚 What You'll Learn{" "}
            <span className="text-gray-400">(The Fun Stuff)</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🤖",
                title: "Talk to AI Like a Friend",
                description:
                  "Learn how to describe what you want so AI builds exactly what you're thinking.",
                time: "5 min read",
                color: "from-blue-500/20 to-cyan-500/20",
              },
              {
                icon: "🔗",
                title: "Connect Wallets (It's Easy!)",
                description:
                  "Add a 'Connect Wallet' button that actually works. Copy, paste, done.",
                time: "10 min tutorial",
                color: "from-emerald-500/20 to-green-500/20",
              },
              {
                icon: "💰",
                title: "Send Your First Transaction",
                description:
                  "Move some ADA around and feel like a blockchain wizard.",
                time: "15 min project",
                color: "from-purple-500/20 to-pink-500/20",
              },
              {
                icon: "🎨",
                title: "Create Something Beautiful",
                description:
                  "Build apps that look professional, not like homework projects.",
                time: "20 min styling",
                color: "from-orange-500/20 to-red-500/20",
              },
              {
                icon: "🚀",
                title: "Share Your Creation",
                description:
                  "Put your app on the internet so friends can use it.",
                time: "25 min deployment",
                color: "from-indigo-500/20 to-purple-500/20",
              },
              {
                icon: "🎉",
                title: "Celebrate Your Success",
                description:
                  "You just built a blockchain app! Time to build something bigger.",
                time: "Priceless",
                color: "from-yellow-500/20 to-orange-500/20",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className={`bg-gradient-to-br ${item.color} border border-gray-700/50 rounded-xl p-6`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-sm text-gray-400 font-medium">
                  {item.time}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coming Soon */}
        <motion.div className="mb-20" variants={fadeInUp}>
          <h2 className="text-4xl font-bold mb-8 text-center">
            🔮 <span className="text-sky-400">Coming Soon</span> (We're Building
            More!)
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "NFT Creator Studio",
                desc: "Turn your photos into NFTs without touching code",
                icon: "🖼️",
              },
              {
                title: "DeFi App Builder",
                desc: "Create token swaps and liquidity pools by describing them",
                icon: "💎",
              },
              {
                title: "DAO Starter Kit",
                desc: "Build voting systems and community governance tools",
                icon: "🏛️",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="bg-gray-900/50 border border-gray-600/50 rounded-xl p-6 text-center opacity-70"
                variants={fadeInUp}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Encouragement */}
        <motion.div
          className="bg-gradient-to-r from-emerald-900/30 to-sky-900/30 border border-emerald-700/50 rounded-2xl p-12 text-center"
          variants={fadeInUp}
        >
          <div className="text-6xl mb-6">💪</div>
          <h2 className="text-3xl font-bold mb-6">You've Got This!</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Thousands of people with zero programming experience are already
            building amazing things. The only difference between them and you is
            that <strong className="text-emerald-400">they started</strong>.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/docs/getting-started-with-ai-tools"
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
            >
              Start Building Now
            </a>
            <a
              href="https://discord.gg/meshjs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gray-600 hover:bg-gray-700 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Join Our Community
            </a>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
