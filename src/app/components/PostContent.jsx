"use client";
import { useTheme } from "../contexts/ThemeContext";
export default function PostContent({ content }) {
    const { theme } = useTheme();
  return (
    <div className={`prose ${theme === 'dark' ? 'prose-invert' : ''} prose-headings:text-[var(--foreground)] prose-code:text-[var(--foreground)]  prose-strong:text-[var(--foreground)]  prose-em:text-[var(--foreground)] prose-headings:font-semibold prose-a:text-primary hover:prose-a:underline prose-img:rounded-md prose-pre:bg-muted prose-pre:text-[var(--foreground)] max-w-none text-[var(--foreground)]`} >
        {content}
    </div>
  );
}