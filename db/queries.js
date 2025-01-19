import { eventModel } from "@/models/event-models";
import {
    replaceMongoIdInArray,
    replaceMongoIdInObject,
} from "@/utils/data-util";
async function getAllEvents() {
    try {
        const getEvents = await eventModel.find().lean();
        return replaceMongoIdInArray(getEvents);
    } catch (err) {
        console.error(err);
    }
}

async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();

    return replaceMongoIdInObject(event);
}

export { getAllEvents, getEventById };
