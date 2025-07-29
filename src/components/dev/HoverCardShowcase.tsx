import { HoverCard, HoverCardContent, HoverCardTrigger } from "../UI/HoverCard";
import { Button } from "../UI/Button";
import { Avatar, AvatarFallback, AvatarImage } from "../UI/Avatar";

export function HoverCardShowcase() {
    return (
        <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">
                HoverCard Showcase
            </h2>
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button variant="link">@nextjs</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                    <div className="flex justify-between gap-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/vercel.png" />
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">@nextjs</h4>
                            <p className="text-sm">
                                The React Framework – created and maintained by
                                @vercel.
                            </p>
                            <div className="text-muted-foreground text-xs">
                                Joined December 2021
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    );
}
