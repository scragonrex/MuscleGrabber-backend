import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
    userId:String,
    startDate:Date,
    excercise:String,
    frequency:String,
    progress:{type:Array, default:[]},
    progressValue:Number,
    status:{type:String, default:"pending"}
});

const Goal = mongoose.model("Goal", goalSchema);
export default Goal;