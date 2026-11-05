"use client";

import { useState, useCallback } from "react";
import confetti from "canvas-confetti";

export interface UseClipboardOptions {
  timeout?: number;
  enableConfetti?: boolean;
}

export interface UseClipboardReturn {
  copied: boolean;
  copy: (text: string) => Promise<boolean>;
  reset: () => void;
}

/**
 * Single Responsibility Hook: Manages clipboard copying, feedback state,
 * and optional interaction feedback (confetti).
 */
export function useClipboard(options: UseClipboardOptions = {}): UseClipboardReturn {
  const { timeout = 2000, enableConfetti = true } = options;
  const [copied, setCopied] = useState<boolean>(false);

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      if (typeof window === "undefined" || !navigator?.clipboard) {
        return false;
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);

        if (enableConfetti) {
          try {
            confetti({
              particleCount: 28,
              spread: 60,
              origin: { y: 0.85 },
              colors: ["#10b981", "#34d399", "#6ee7b7", "#a7f3d0"],
              ticks: 120,
              disableForReducedMotion: true,
            });
          } catch {
            // Graceful fallback if canvas is unsupported
          }
        }

        setTimeout(() => setCopied(false), timeout);
        return true;
      } catch (err) {
        console.error("Failed to copy text to clipboard:", err);
        setCopied(false);
        return false;
      }
    },
    [timeout, enableConfetti]
  );

  const reset = useCallback(() => setCopied(false), []);

  return { copied, copy, reset };
}
