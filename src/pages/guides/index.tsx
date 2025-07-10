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

const guides = [
  {
    title: "Send Your First ADA",
    description:
      "Move some ADA around and feel like a blockchain wizard. Copy, paste, done!",
    href: "/guides/hello-world-dapp",
    difficulty: "Super Easy",
    time: "15 min",
    icon: "💰",
    color: "from-emerald-500/20 to-green-500/20",
    encouragement: "Perfect first project!",
  },
  {
    title: "Create Your First NFT",
    description:
      "Turn your photos into digital collectibles. No art skills needed, just follow along!",
    href: "/guides/nft-collection",
    difficulty: "Still Easy",
    time: "30 min",
    icon: "🎨",
    color: "from-purple-500/20 to-pink-500/20",
    encouragement: "You'll love this one!",
    comingSoon: true,
  },
  {
    title: "Build a Token Swapper",
    description:
      "Create your own mini exchange. Sounds fancy, but AI makes it simple!",
    href: "/guides/token-swap",
    difficulty: "Getting Fun",
    time: "45 min",
    icon: "🔄",
    color: "from-blue-500/20 to-cyan-500/20",
    encouragement: "You're ready for this!",
    comingSoon: true,
  },
];

export default function Guides() {
  return (
    <Layout>
      <Head>
        <title>Your Building Journey Starts Here | Mnemos</title>
        <meta
          name="description"
          content="Step-by-step projects that turn you from curious beginner to confident builder. No programming experience needed!"
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
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Your Building Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Follow these step-by-step projects to go from
            <span className="text-sky-400 font-semibold">
              {" "}
              "I have no idea what I'm doing"{" "}
            </span>
            to
            <span className="text-emerald-400 font-semibold">
              {" "}
              "I just built that!"{" "}
            </span>
          </p>
          <div className="bg-gradient-to-r from-emerald-900/30 to-sky-900/30 border border-emerald-700/50 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg text-emerald-200">
              ✨ <strong>Each project builds on the last one.</strong> Start
              with #1 and work your way up!
            </p>
          </div>
        </motion.div>

        {/* Progress Path */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            📈 Your <span className="text-emerald-400">Learning Path</span>
          </h2>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-emerald-900/50 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
              <span className="text-sm">Complete Beginner</span>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex items-center gap-2 bg-sky-900/50 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
              <span className="text-sm">Confident Builder</span>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex items-center gap-2 bg-purple-900/50 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span className="text-sm">Creating Your Own Projects</span>
            </div>
          </div>
        </motion.div>

        {/* Guides Grid */}
        <motion.div
          className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-20"
          variants={staggerChildren}
        >
          {guides.map((guide, index) => {
            const CardComponent = guide.comingSoon ? "div" : "a";
            return (
              <motion.div key={guide.title} variants={fadeInUp}>
                <CardComponent
                  href={guide.comingSoon ? undefined : guide.href}
                  className={`bg-gradient-to-br ${
                    guide.color
                  } border border-gray-700/50 rounded-2xl p-8 flex flex-col h-full ${
                    !guide.comingSoon
                      ? "hover:scale-[1.03] transition-all duration-300 cursor-pointer hover:shadow-lg"
                      : "opacity-70"
                  }`}
                >
                  {/* Project Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          #{index + 1}
                        </span>
                      </div>
                      <div className="text-4xl">{guide.icon}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs bg-white/10 px-2 py-1 rounded text-white font-medium mb-1">
                        {guide.difficulty}
                      </div>
                      <div className="text-xs text-gray-300">{guide.time}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {guide.title}
                  </h3>
                  <p className="text-gray-200 mb-4 leading-relaxed flex-1">
                    {guide.description}
                  </p>

                  {/* Encouragement */}
                  <div className="bg-white/10 rounded-xl p-3 mb-4">
                    <p className="text-sm text-white font-medium">
                      💪 {guide.encouragement}
                    </p>
                  </div>

                  {/* Action */}
                  {guide.comingSoon ? (
                    <div className="text-center">
                      <span className="inline-block bg-gray-700/50 text-sm px-4 py-2 rounded-full text-gray-300">
                        Coming Soon
                      </span>
                    </div>
                  ) : (
                    <div className="text-center">
                      <span className="inline-block bg-white/20 hover:bg-white/30 text-sm px-6 py-3 rounded-full text-white font-semibold transition-all duration-300">
                        Let's Build This! →
                      </span>
                    </div>
                  )}
                </CardComponent>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Encouragement Section */}
        <motion.div
          className="bg-gradient-to-r from-emerald-900/30 to-sky-900/30 border border-emerald-700/50 rounded-2xl p-12 text-center mb-20"
          variants={fadeInUp}
        >
          <div className="text-6xl mb-6">🎯</div>
          <h2 className="text-3xl font-bold mb-6">
            Why These Projects Are Perfect for You
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-400">
                Quick Wins
              </h3>
              <p className="text-gray-300">
                Each project gives you something working in 15-45 minutes. No
                month-long commitments!
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-xl font-semibold mb-2 text-sky-400">
                AI Does the Hard Parts
              </h3>
              <p className="text-gray-300">
                You focus on the creative vision. AI handles the complex coding
                and blockchain stuff.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                Real Projects
              </h3>
              <p className="text-gray-300">
                Not toy examples. These are actual apps you can show off and use
                in the real world.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div
          className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50 rounded-2xl p-12 text-center"
          variants={fadeInUp}
        >
          <div className="text-6xl mb-6">🤔</div>
          <h2 className="text-3xl font-bold mb-6">
            Never Built Anything Before?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            No problem! Start with our setup guide. It takes 5 minutes and gets
            you ready to build anything.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/docs/getting-started-with-ai-tools"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Set Me Up First!
            </a>
            <a
              href="/guides/hello-world-dapp"
              className="px-8 py-4 border-2 border-gray-600 hover:bg-gray-700 rounded-xl font-bold text-lg transition-all duration-300"
            >
              I'm Ready to Build
            </a>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
