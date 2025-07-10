import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  // Check if current path matches or starts with the given path
  const isActivePath = (path: string) => {
    if (path === "/") return router.pathname === "/";
    return router.pathname.startsWith(path);
  };

  // Dropdown content
  const learnDropdown: DropdownSection[] = [
    {
      title: "Getting Started",
      items: [
        {
          title: "AI Developer Revolution",
          description: "Understand how AI is changing development",
          href: "/docs/ai-developer-revolution",
          icon: "🤖",
        },
        {
          title: "Getting Started with AI Tools",
          description: "Set up Cursor and build your first app",
          href: "/docs/getting-started-with-ai-tools",
          icon: "🚀",
        },
      ],
    },
  ];

  const buildDropdown: DropdownSection[] = [
    {
      title: "Beginner Projects",
      items: [
        {
          title: "Send Your First Transaction",
          description: "Move ADA around and feel like a wizard",
          href: "/guides/hello-world-dapp",
          icon: "💰",
        },
      ],
    },
    {
      title: "Coming Soon",
      items: [
        {
          title: "Create Your First NFT",
          description: "Turn photos into digital collectibles",
          href: "/guides/nft-collection",
          icon: "🎨",
        },
        {
          title: "Build a Token Swapper",
          description: "Create your own mini exchange",
          href: "/guides/token-swap",
          icon: "🔄",
        },
      ],
    },
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent"
              onClick={closeDropdown}
            >
              Mnemos
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {/* Learn Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => handleDropdownToggle("learn")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 group ${
                  isActivePath("/docs")
                    ? "bg-emerald-900/50 text-emerald-400"
                    : "hover:bg-gray-800/50"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  📚
                </span>
                <span className="font-medium">Learn</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "learn" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.button>

              <AnimatePresence>
                {activeDropdown === "learn" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
                  >
                    {learnDropdown.map((section, sectionIndex) => (
                      <div
                        key={section.title}
                        className={
                          sectionIndex > 0 ? "border-t border-gray-700" : ""
                        }
                      >
                        <div className="px-4 py-3 bg-gray-750">
                          <h3 className="text-sm font-semibold text-gray-300">
                            {section.title}
                          </h3>
                        </div>
                        {section.items.map(item => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeDropdown}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-gray-700/50 transition-colors"
                          >
                            <span className="text-2xl">{item.icon}</span>
                            <div className="flex-1">
                              <h4 className="font-medium text-white">
                                {item.title}
                              </h4>
                              <p className="text-sm text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Build Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => handleDropdownToggle("build")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 group ${
                  isActivePath("/guides")
                    ? "bg-emerald-900/50 text-emerald-400"
                    : "hover:bg-gray-800/50"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  🚀
                </span>
                <span className="font-medium">Build</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "build" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.button>

              <AnimatePresence>
                {activeDropdown === "build" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
                  >
                    {buildDropdown.map((section, sectionIndex) => (
                      <div
                        key={section.title}
                        className={
                          sectionIndex > 0 ? "border-t border-gray-700" : ""
                        }
                      >
                        <div className="px-4 py-3 bg-gray-750">
                          <h3 className="text-sm font-semibold text-gray-300">
                            {section.title}
                          </h3>
                        </div>
                        {section.items.map(item => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeDropdown}
                            className={`flex items-start gap-3 px-4 py-3 transition-colors ${
                              item.href.includes("nft-collection") ||
                              item.href.includes("token-swap")
                                ? "opacity-60 cursor-not-allowed"
                                : "hover:bg-gray-700/50"
                            }`}
                          >
                            <span className="text-2xl">{item.icon}</span>
                            <div className="flex-1">
                              <h4 className="font-medium text-white flex items-center gap-2">
                                {item.title}
                                {(item.href.includes("nft-collection") ||
                                  item.href.includes("token-swap")) && (
                                  <span className="text-xs bg-gray-600 px-2 py-1 rounded-full text-gray-300">
                                    Soon
                                  </span>
                                )}
                              </h4>
                              <p className="text-sm text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                    <div className="border-t border-gray-700 p-4">
                      <Link
                        href="/guides"
                        onClick={closeDropdown}
                        className="text-sm text-sky-400 hover:text-sky-300 transition-colors"
                      >
                        View all projects →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Community Link */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <a
                href="https://discord.gg/meshjs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-all duration-200 group"
                onClick={closeDropdown}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  💬
                </span>
                <span className="font-medium">Community</span>
              </a>
            </motion.div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/docs/getting-started-with-ai-tools"
                className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
                onClick={closeDropdown}
              >
                Start Building
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto", marginTop: 16 },
            closed: { opacity: 0, height: 0, marginTop: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <nav className="flex flex-col space-y-4 pb-4">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-400 px-4">
                Learn
              </div>
              {learnDropdown[0].items.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-400">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-400 px-4">
                Build
              </div>
              {buildDropdown
                .flatMap(section => section.items)
                .map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      item.href.includes("nft-collection") ||
                      item.href.includes("token-swap")
                        ? "opacity-60 cursor-not-allowed"
                        : "hover:bg-gray-800/50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-medium flex items-center gap-2">
                        {item.title}
                        {(item.href.includes("nft-collection") ||
                          item.href.includes("token-swap")) && (
                          <span className="text-xs bg-gray-600 px-2 py-1 rounded-full text-gray-300">
                            Soon
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-400">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            <a
              href="https://discord.gg/meshjs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-2xl">💬</span>
              <div>
                <div className="font-medium">Community</div>
                <div className="text-sm text-gray-400">Get help & share</div>
              </div>
            </a>

            <Link
              href="/docs/getting-started-with-ai-tools"
              className="mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 rounded-lg font-semibold text-center transition-all duration-200 shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Building
            </Link>
          </nav>
        </motion.div>
      </div>

      {/* Backdrop for dropdowns */}
      {activeDropdown && (
        <div className="fixed inset-0 z-40" onClick={closeDropdown} />
      )}
    </header>
  );
}
