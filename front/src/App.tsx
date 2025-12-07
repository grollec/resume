import { useEffect, useState } from "react";
import Resume from "./components/Resume";

function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${isDark ? "dark bg-gray-900" : "bg-gray-100"} ${isDark ? "dark" : ""}`}
    >
      <div className="p-0 sm:p-8">
        {/* Theme Toggle */}
        <div className="max-w-4xl mx-auto flex justify-end p-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="py-2 px-4 text-2xl rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
        </div>
        <Resume />
      </div>
    </div>
  );
}

export default App;
