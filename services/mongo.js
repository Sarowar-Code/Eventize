import mongoose from "mongoose";

export async function dbConnect() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(connection, "Connected to MongoDB");

        return connection;
    } catch (err) {
        console.error(err.message);
    }
}
