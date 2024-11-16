"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";

function ThemeWatcher() {
  const { setTheme } = useTheme();

  useEffect(() => {
    // Check if window.matchMedia is supported
    if (window.matchMedia) {
      const colorSchemeQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      // Set initial theme
      setTheme(colorSchemeQuery.matches ? "dark" : "light");

      // Listen for theme changes
      const handleThemeChange = (e: MediaQueryListEvent) => {
        setTheme(e.matches ? "dark" : "light");
      };

      colorSchemeQuery.addEventListener("change", handleThemeChange);

      // Cleanup
      return () => {
        colorSchemeQuery.removeEventListener("change", handleThemeChange);
      };
    }
  }, []);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem>
      <ThemeWatcher />
      {children}
    </ThemeProvider>
  );
}
