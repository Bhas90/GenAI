import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: String,
    mobile: String,
    email: String,
    category: String,

    source: String,

    pageUrl: String,

    ipAddress: String,

    userAgent: String,

    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

export default mongoose.model(
  "Lead",
  leadSchema
);