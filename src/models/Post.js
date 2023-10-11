import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    avatar: {
      type: String,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.models.Post || mongoose.model("Post", postSchema);
