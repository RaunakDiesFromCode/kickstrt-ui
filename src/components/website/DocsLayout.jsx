export default function DocsLayout({ title, description, children }) {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-2 ">{title}</h1>
            {description && (
                <p className="text-lg text-muted-foreground mb-8">
                    {description}
                </p>
            )}
            <div>{children}</div>
        </div>
    );
}
