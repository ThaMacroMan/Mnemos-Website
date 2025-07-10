import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: string;
}

interface NextStepItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  primary?: boolean;
}

// Reading progress indicator
function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setShowScrollToTop(latest > 0.1);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollToTop ? 1 : 0,
          scale: showScrollToTop ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </>
  );
}

function Breadcrumb() {
  const router = useRouter();
  const path = router.asPath;

  // Define breadcrumb mappings for better UX
  const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
    "/": [{ label: "Home", href: "/", icon: "🏠" }],
    "/docs": [
      { label: "Home", href: "/", icon: "🏠" },
      { label: "Learn", href: "/docs", icon: "📚" },
    ],
    "/docs/getting-started-with-ai-tools": [
      { label: "Home", href: "/", icon: "🏠" },
      { label: "Learn", href: "/docs", icon: "📚" },
      {
        label: "Getting Started",
        href: "/docs/getting-started-with-ai-tools",
        icon: "🚀",
      },
    ],
    "/docs/ai-developer-revolution": [
      { label: "Home", href: "/", icon: "🏠" },
      { label: "Learn", href: "/docs", icon: "📚" },
      {
        label: "AI Revolution",
        href: "/docs/ai-developer-revolution",
        icon: "🤖",
      },
    ],
    "/guides": [
      { label: "Home", href: "/", icon: "🏠" },
      { label: "Build", href: "/guides", icon: "🚀" },
    ],
    "/guides/hello-world-dapp": [
      { label: "Home", href: "/", icon: "🏠" },
      { label: "Build", href: "/guides", icon: "🚀" },
      {
        label: "First Transaction",
        href: "/guides/hello-world-dapp",
        icon: "💰",
      },
    ],
  };

  const breadcrumbs = breadcrumbMap[path] || [
    { label: "Home", href: "/", icon: "🏠" },
  ];

  // Don't show breadcrumbs on home page
  if (path === "/") return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800/50 border-b border-gray-700/50 px-6 py-3"
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <span className="text-gray-500 mx-2">→</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="flex items-center gap-2 text-emerald-400 font-medium">
                  <span>{item.icon}</span>
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </motion.nav>
  );
}

function NextSteps() {
  const router = useRouter();
  const path = router.asPath;

  // Define next steps for each page
  const nextStepsMap: Record<string, NextStepItem[]> = {
    "/": [
      {
        title: "Start Learning",
        description: "Understand how AI is changing development",
        href: "/docs/ai-developer-revolution",
        icon: "🤖",
      },
      {
        title: "Jump Right In",
        description: "Set up your tools and build your first app",
        href: "/docs/getting-started-with-ai-tools",
        icon: "🚀",
        primary: true,
      },
    ],
    "/docs": [
      {
        title: "Set Up Your Tools",
        description: "Get Cursor installed and build your first app",
        href: "/docs/getting-started-with-ai-tools",
        icon: "🚀",
        primary: true,
      },
      {
        title: "Start Building",
        description: "Try our step-by-step projects",
        href: "/guides",
        icon: "🏗️",
      },
    ],
    "/docs/ai-developer-revolution": [
      {
        title: "Get Set Up",
        description: "Download the tools and build your first app",
        href: "/docs/getting-started-with-ai-tools",
        icon: "🚀",
        primary: true,
      },
      {
        title: "Join Community",
        description: "Connect with other AI developers",
        href: "https://discord.gg/meshjs",
        icon: "💬",
      },
    ],
    "/docs/getting-started-with-ai-tools": [
      {
        title: "Send Your First Transaction",
        description: "Build a real DApp and move ADA around",
        href: "/guides/hello-world-dapp",
        icon: "💰",
        primary: true,
      },
      {
        title: "Explore More Projects",
        description: "See what else you can build",
        href: "/guides",
        icon: "🎯",
      },
    ],
    "/guides": [
      {
        title: "Send Your First Transaction",
        description: "Perfect first project - move ADA around",
        href: "/guides/hello-world-dapp",
        icon: "💰",
        primary: true,
      },
      {
        title: "Need Setup Help?",
        description: "Make sure your tools are ready",
        href: "/docs/getting-started-with-ai-tools",
        icon: "🔧",
      },
    ],
    "/guides/hello-world-dapp": [
      {
        title: "Share Your Success",
        description: "Show off your first transaction in our community",
        href: "https://discord.gg/meshjs",
        icon: "🎉",
        primary: true,
      },
      {
        title: "Build More Projects",
        description: "Try creating NFTs or token swaps",
        href: "/guides",
        icon: "🚀",
      },
    ],
  };

  const nextSteps = nextStepsMap[path];

  if (!nextSteps) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-20 mb-10"
    >
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-700/50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">🎯 What's Next?</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {nextSteps.map((step, index) => (
            <motion.div
              key={step.href}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={step.href}
                target={step.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  step.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`block p-6 rounded-xl border transition-all duration-300 ${
                  step.primary
                    ? "bg-gradient-to-r from-emerald-900/50 to-green-900/50 border-emerald-700/50 hover:from-emerald-800/50 hover:to-green-800/50"
                    : "bg-gray-800/50 border-gray-600/50 hover:bg-gray-700/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{step.icon}</div>
                  <div className="flex-1">
                    <h4
                      className={`text-lg font-semibold mb-2 ${
                        step.primary ? "text-emerald-400" : "text-white"
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-gray-400">→</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ReadingProgress />
      <Header />
      <Breadcrumb />
      <main className="flex-1 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {children}
          <NextSteps />
        </div>
      </main>
      <Footer />
    </>
  );
}
