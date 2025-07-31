import Showcase from "./Showcase";
import { Button } from "../UI/Button";

const description = (
    <>
        Stunning components, fully yours to shape.
        <br />
        Tweak it, own it. No walls, no limits. All open source
    </>
);

const Hero = () => {
    return (
        <div className="mt-40">
            <h1 className="text-5xl font-bold text-center mt-10 font-lexend">
                The{" "}
                <span className="text-teal-400 text-shadow-lg text-shadow-primary/5 ">
                    next-gen
                </span>{" "}
                React component library
            </h1>
            <p className="text-center mt-4 mb-10">{description}</p>
            <div className="flex justify-center gap-4 mb-10">
                <Button className="bg-foreground">Let&apos;s Go &gt;</Button>
                <Button variant="ghost">View Components</Button>
            </div>
            <Showcase />
        </div>
    );
};

export default Hero;
