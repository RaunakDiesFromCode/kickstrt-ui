import { Skeleton } from "../UI/Skeleton";

export function SkeletonShowcase() {
    return (
        <div className=" p-6 space-y-4 text-primary">
            <h2 className="text-xl font-bold text-foreground mb-4">
                Skeleton Showcase
            </h2>
            <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
    );
}
