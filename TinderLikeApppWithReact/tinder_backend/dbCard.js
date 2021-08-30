import Monkgoose from "mongoose";

const cardSchema = Mongoose.Schema({
    name:String,
    url:String,
});

export default Mongoose.model("cards",cardSchema);

