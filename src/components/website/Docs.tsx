import { NavLink, Routes, Route, Navigate } from "react-router-dom";

// Import MDX docs
import Introduction from "./docs/introduction.mdx";
import Installation from "./docs/installation.mdx";
import ComponentsJson from "./docs/components-json.mdx";
import Theming from "./docs/theming.mdx";
import DarkMode from "./docs/dark-mode.mdx";
import CLI from "./docs/cli.mdx";

// Table of Contents
const toc = [
    { name: "Introduction", path: "introduction" },
    { name: "Installation", path: "installation" },
    { name: "components.json", path: "components-json" },
    { name: "Theming", path: "theming" },
    { name: "Dark Mode", path: "dark-mode" },
    { name: "CLI", path: "cli" },
];

const Docs = () => {
    return (
        <div className="flex gap-8">
            {/* Sidebar */}
            <aside className="w-64 pr-4">
                <h2 className="text-lg font-semibold mb-4">Docs</h2>
                <nav className="flex flex-col gap-2">
                    {toc.map((item) => (
                        <NavLink
                            key={item.path}
                            to={`/docs/${item.path}`} // ✅ absolute path
                            className={({ isActive }) =>
                                `px-2 py-1 rounded-md transition ${
                                    isActive
                                        ? "bg-secondary  font-medium"
                                        : "hover:bg-accent"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            {/* Content */}
            <section className="flex-1 prose dark:prose-invert max-w-none">
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="introduction" replace />}
                    />
                    <Route path="introduction" element={<Introduction />} />
                    <Route path="installation" element={<Installation />} />
                    <Route
                        path="components-json"
                        element={<ComponentsJson />}
                    />
                    <Route path="theming" element={<Theming />} />
                    <Route path="dark-mode" element={<DarkMode />} />
                    <Route path="cli" element={<CLI />} />
                </Routes>
            </section>
        </div>
    );
};

export default Docs;
