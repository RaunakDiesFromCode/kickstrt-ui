import {
    NavLink,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

// Import MDX docs
import Introduction from "./docs/introduction.mdx";
import Installation from "./docs/installation.mdx";
import Theming from "./docs/theming.mdx";
import DarkMode from "./docs/dark-mode.mdx";
import CLI from "./docs/cli.mdx";

// Table of Contents (left nav)
const toc = [
    { name: "Introduction", path: "introduction" },
    { name: "Installation", path: "installation" },
    { name: "Theming", path: "theming" },
    { name: "Dark Mode", path: "dark-mode" },
    { name: "CLI", path: "cli" },
];

const Docs = () => {
    const location = useLocation();
    const [headings, setHeadings] = useState<
        { id: string; text: string; level: number }[]
    >([]);

useEffect(() => {
    setTimeout(() => {
        const mainContent = document.querySelector("section"); // only select main content
        if (!mainContent) return;

        const elements = Array.from(
            mainContent.querySelectorAll("h2, h3")
        ) as HTMLHeadingElement[];

        const newHeadings = elements.map((el) => {
            const generatedId =
                el.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
            if (!el.id) el.id = generatedId;

            return {
                id: el.id,
                text: el.textContent || "",
                level: el.tagName === "H2" ? 2 : 3,
            };
        });

        setHeadings(newHeadings);
    }, 100);
}, [location]);


    return (
        <div className="flex">
            {/* Left Sidebar */}
            <aside className="fixed left-10 top-0 mt-20 h-screen w-64 pr-4 bg-background">
                <nav className="flex flex-col gap-2 px-4 mt-8">
                    {toc.map((item) => (
                        <NavLink
                            key={item.path}
                            to={`/docs/${item.path}`}
                            className={({ isActive }) =>
                                `px-2 py-1 rounded-md transition ${
                                    isActive
                                        ? "bg-secondary font-medium"
                                        : "hover:bg-accent"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <section className="flex-1 prose dark:prose-invert max-w-[60%] ml-64 mr-64 p-8">
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="introduction" replace />}
                    />
                    <Route path="introduction" element={<Introduction />} />
                    <Route path="installation" element={<Installation />} />
                    <Route path="theming" element={<Theming />} />
                    <Route path="dark-mode" element={<DarkMode />} />
                    <Route path="cli" element={<CLI />} />
                </Routes>
            </section>

            {/* Right Sidebar (dynamic TOC) */}
            <aside className="fixed right-10 top-0 mt-20 h-screen w-64 pl-4 bg-background overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4 mt-8 px-4">
                    On this page
                </h2>
                <nav className="flex flex-col gap-2 px-4 text-sm">
                    {headings.map((h) => (
                        <a
                            key={h.id}
                            href={`#${h.id}`}
                            className={`pl-${
                                h.level === 3 ? "4" : "0"
                            } hover:underline`}
                        >
                            {h.text}
                        </a>
                    ))}
                </nav>
            </aside>
        </div>
    );
};

export default Docs;
