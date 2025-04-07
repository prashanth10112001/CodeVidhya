import { Schema, model } from "mongoose";

const dsaSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

export default model("Dsa", dsaSchema);
