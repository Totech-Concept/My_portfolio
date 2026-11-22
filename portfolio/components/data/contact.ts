import { IconType } from "react-icons";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

export interface Contact {
    id: number,
    name: String,
    description: String,
    icon: IconType

}

export const contactMe: Contact[] = [
    {
        id: 1,
        name: "Email",
        description: "tobilobamotunrayo74@gmail.com",
        icon: TfiEmail
    },
    {
        id: 2,
        name: "Location",
        description: "Lagos, Nigeria",
        icon: FaLocationDot
    },
    {
        id: 3,
        name: "Timezone",
        description: "GMT+1 Timezone (Remote Globally)",
        icon: FaGlobe
    }
]