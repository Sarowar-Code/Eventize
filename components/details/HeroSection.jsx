import Image from "next/image";
import ActionButtons from "../ActionButton";

const HeroSection = ({ eventInfo }) => {
    return (
        <section class="container">
            <div class="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
                <Image
                    src={eventInfo?.imageUrl}
                    alt="Event 1"
                    class="h-[450px] mx-auto"
                    height={700}
                    width={700}
                />
            </div>

            <div class="flex items-end">
                <div class="flex-auto py-4">
                    <h1 class="font-bold text-2xl">{eventInfo?.name}</h1>
                    <p class="text-[#9C9C9C] text-base mt-1">
                        {eventInfo?.location}
                    </p>
                    <div class="text-[#737373] text-sm mt-1">
                        <span>
                            {eventInfo?.interested_ids?.length} Interested
                        </span>
                        <span>|</span>
                        <span>{eventInfo?.going_ids?.length} Going</span>
                    </div>
                </div>

                <ActionButtons fromDetails={true} />
            </div>
        </section>
    );
};

export default HeroSection;
