import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    coldarkDark,
    coldarkCold,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "../UI/theme-provider";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
    language: string;
    children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
    const { theme } = useTheme();
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(children);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <div className="relative group my-4">
            {/* Copy Button */}
            <button
                onClick={handleCopy}
                className="absolute -top-6 left-2 flex items-center gap-1 rounded bg-gray-700 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            >
                {copied ? (
                    <Check className="w-3 h-3" />
                ) : (
                    <Copy className="w-3 h-3" />
                )}
                {copied ? "Copied" : "Copy"}
            </button>

            {/* Syntax Highlighter */}
            <SyntaxHighlighter
                language={language}
                style={theme === "dark" ? coldarkDark : coldarkCold}
                className="rounded-lg text-xs"
            >
                {children}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
