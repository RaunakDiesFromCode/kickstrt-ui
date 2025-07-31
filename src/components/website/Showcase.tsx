import { CardShowcase } from "../dev/CardShowcase";
import { CalendarShowcase } from "../dev/CalendarShowcase";
import { CardsShare } from "./samples/share";
import { CardsChat } from "./samples/chat";
import { CardsTeamMembers } from "./samples/team-members";
import { CardsCookieSettings } from "./samples/cookie-settings";

const Showcase = () => {
    return (
        <div className="justify-center flex gap-2 items-start">
            <div className="flex flex-col gap-2">
                <CardShowcase />
                <CardsChat />
            </div>
            <div className="flex flex-col gap-2 w-96">
                <CardsShare />
                <CardsCookieSettings />
            </div>
            <div className="flex flex-col gap-2">
                <CalendarShowcase />
                <CardsTeamMembers />
            </div>
        </div>
    );
};

export default Showcase;
