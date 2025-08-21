export function Footer() {
    return (
        <footer className="pt-15 bg-background pb-4">
            <div className="w-full px-4 text-center text-xs sm:text-sm text-muted-foreground">
                Built by{" "}
                <a
                    href="https://raunak-portfolio-creative.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                >
                    Raunak Manna
                </a>
                . The source code is available on{" "}
                <a
                    href="https://github.com/RaunakDiesFromCode/kickstrt-ui"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                >
                    GitHub
                </a>
                .
            </div>
        </footer>
    );
}
