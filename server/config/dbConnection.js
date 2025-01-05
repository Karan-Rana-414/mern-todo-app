import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGOURI = process.env.MONGOURI;
export const dbConnection = async () => {

    try {
        if(!MONGOURI){
            throw new Error("Database URI is required");
            
        }
        await mongoose.connect(MONGOURI);
        console.log("Connected to db successfully");

    } catch (err) {

        console.log("An error occured while connecting to dtabase", err);

        process.exit(1);
    }
}