"use client";
import { Check, Copy } from "lucide-react";
import React from "react";

interface CopyTextProps {
  text: string;
  className?: string;
}

export default function CopyText({ text, className = "" }: CopyTextProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`p-1 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${className}`}
      aria-label={copied ? "Copied!" : "Copy to clipboard"}
      type="button"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
