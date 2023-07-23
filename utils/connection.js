import mongoose from "mongoose";

const { DB_URL } = process.env;

const connectMongo = async () => mongoose.connect(DB_URL, {dbName: "anvygrams-db"});

export default connectMongo;