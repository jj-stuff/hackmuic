"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const Skiper4 = () => {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <motion.div
        className="rounded-3xl border border-foreground/10 bg-muted/30 p-6 backdrop-blur-sm"
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <ThemeToggleButton5
          className="size-20"
          isDark={isDark}
          onToggle={() => setIsDark((prev) => !prev)}
        />
      </motion.div>
    </div>
  );
};

export { Skiper4 };

type ThemeToggleButton5Props = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> & {
  isDark: boolean;
  onToggle: () => void;
};

export const ThemeToggleButton5 = ({
  className = "",
  isDark,
  onToggle,
  disabled,
  children,
  ...props
}: ThemeToggleButton5Props) => {
  const rawId = React.useId();
  const clipPathId = React.useMemo(
    () => `skiper-toggle-${rawId.replace(/:/g, "")}`,
    [rawId],
  );

  return (
    <button
      type="button"
      {...props}
      disabled={disabled}
      className={cn(
        "rounded-full transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2",
        isDark ? "bg-black text-white" : "bg-white text-black",
        disabled ? "cursor-not-allowed opacity-75" : "",
        className,
      )}
      onClick={() => {
        if (disabled) return;
        onToggle();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <clipPath id={clipPathId}>
          <motion.path
            animate={{ y: isDark ? 5 : 0, x: isDark ? -20 : 0 }}
            transition={{ ease: "easeInOut", duration: 0.35 }}
            d="M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0"
          />
        </clipPath>
        <g clipPath={`url(#${clipPathId})`}>
          <circle cx="16" cy="16" r="15" />
        </g>
      </svg>
      {children}
    </button>
  );
};

/**
 * Theme Toggle Animations — React + Framer Motion Recreation
 * Inspired by and adapted from https://toggles.dev/ (Open Source CSS Theme Toggles by Alfie Jones)
 * This implementation is rebuilt in React and Framer Motion, avoiding external toggle packages.
 *
 * Attribution: https://toggles.dev/
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
