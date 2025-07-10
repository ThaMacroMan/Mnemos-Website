import "@/styles/globals.css";
import "@meshsdk/react/styles.css";
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import { MDXProvider } from "@mdx-js/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const components = {
  // Custom MDX components can be added here
};

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween" as const,
  ease: "anticipate" as const,
  duration: 0.4,
};

// Loading indicator component
function LoadingBar() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 z-50"
    />
  );
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <MeshProvider>
        <MDXProvider components={components}>
          {loading && <LoadingBar />}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={router.asPath}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen bg-gray-900 text-white flex flex-col w-full"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </MDXProvider>
      </MeshProvider>
    </div>
  );
}
