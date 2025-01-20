import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/user-model";
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

async function createUser(user) {
    return await userModel.create(user);
}

async function findUserByCredentials(credentials) {
    const user = await userModel.findOne(credentials).lean();

    return user;
}

export { createUser, findUserByCredentials, getAllEvents, getEventById };
