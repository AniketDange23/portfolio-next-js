import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONDO_DB_URL);
  } catch (error) {
    throw new error(" MongoDB connection is failed");
  }
};

export default connect;
