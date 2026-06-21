import {
  MessageCircle,
  Zap,
  FileSearch,
  ShieldCheck,
  BookOpen,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export const FEATURES: Feature[] = [
  {
    icon: MessageCircle,
    title: "Chat with any PDF",
    description:
      "Ask questions and get precise answers directly from your document.",
    tags: ["Popular", "AI", "Core"],
  },
  {
    icon: Zap,
    title: "Instant responses",
    description: "Get answers in seconds with real-time AI streaming.",
    tags: ["New", "Performance", "Fast"],
  },
  {
    icon: FileSearch,
    title: "Smart extraction",
    description:
      "Sonor pinpoints exactly where the answer lives in your PDF and start answering your question.",
    tags: ["Popular", "AI", "Smart"],
  },
  {
    icon: BookOpen,
    title: "Auto summarization",
    description:
      "Get a clear summary of any document without reading a single page.",
    tags: ["New", "AI", "Core"],
  },
  {
    icon: Sparkles,
    title: "Context-aware AI",
    description: "Understands meaning and context, not just keywords.",
    tags: ["Coming Soon", "AI", "Smart"],
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    description:
      "Your documents are encrypted and never shared or stored beyond your session.",
    tags: ["Popular", "Security", "Core"],
  },
];
