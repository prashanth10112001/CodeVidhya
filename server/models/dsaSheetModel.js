import { Schema, model } from "mongoose";

// Define Topic Schema
const topicSchema = new Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    questions: {
      type: [
        {
          question: { type: String, required: true },
          link: { type: String, required: true },
        },
      ],
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  }
  //   { _id: false } // Prevent creating a separate _id for each topic
);

// Define Data Sheet Schema
const dataSheetSchema = new Schema(
  {
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
    link: {
      type: String,
      required: true,
    },
    topics: {
      type: [topicSchema], // Use the topic schema as an embedded document
      required: true,
    },
  },
  { timestamps: true } // Optionally, you can add timestamps for createdAt and updatedAt
);

// Create the model
export const dsaSheetModel = model("dsasheet", dataSheetSchema);
