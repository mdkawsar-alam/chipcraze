import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.DB_URI!);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Mongodb connected");
        });

        connection.on("error", (err) => {
            console.log("Mongodb connection error Please make sure the DB is up and running: " + err);
            process.exit(1); 
        });
    } catch (error) {
         console.log(" something want to wring connect to DB")
        console.log("Connection error: ", error);
        process.exit(1);
    }
}
