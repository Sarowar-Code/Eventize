import EventDetails from "@/components/details/EventDetails";
import EventVenue from "@/components/details/EventVenue";
import HeroSection from "@/components/details/HeroSection";
import { getEventById } from "@/db/queries";

export async function generateMetadata({ params: { id } }) {
    const eventInfo = await getEventById(id);

    return {
        title: `Eventry - ${eventInfo?.name}`,
        description: eventInfo?.details,
        openGraph: {
            images: [eventInfo?.imageUrl],
        },
    };
}

const EventDetailsPage = async ({ params: { id } }) => {
    const eventInfo = await getEventById(id);
    console.log(eventInfo);

    return (
        <main>
            <HeroSection eventInfo={eventInfo} />
            <section className=" container">
                <div class="grid grid-cols-5 gap-12 my-12">
                    <EventDetails
                        details={eventInfo?.details}
                        swags={eventInfo?.swags}
                    />
                    <EventVenue location={getEventById?.location} />
                </div>
            </section>
        </main>
    );
};

export default EventDetailsPage;
