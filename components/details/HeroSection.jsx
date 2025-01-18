import Image from "next/image";
import ActionButtons from "../ActionButton";

const HeroSection = () => {
    return (
        <section class="container">
            <div class="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
                <Image
                    src="/google-io-2023-1.png"
                    alt="Event 1"
                    class="h-[450px] mx-auto"
                    height={700}
                    width={1000}
                />
            </div>

            <div class="flex items-end">
                <div class="flex-auto py-4">
                    <h1 class="font-bold text-2xl">Google I/O Extended</h1>
                    <p class="text-[#9C9C9C] text-base mt-1">
                        Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
                    </p>
                    <div class="text-[#737373] text-sm mt-1">
                        <span>1k Interested</span>
                        <span>|</span>
                        <span>40K Going</span>
                    </div>
                </div>

                <ActionButtons fromDetails={true} />
            </div>
        </section>
    );
};

export default HeroSection;
