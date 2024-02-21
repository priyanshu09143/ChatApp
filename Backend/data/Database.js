import mongoose from "mongoose";


const ConnectDB = ()=>{

    mongoose.connect(process.env.MONGO_URI, { dbName: "ChatApp" })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
}
export default ConnectDB;
