import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: {
      type: String,
      default: Date.now
  }
});

interface IUrl extends Document {
  urlCode: String;
  longUrl: String;
  ShortUrl: String;
  date: String;
}

export default model<IUrl>("Url", schema);
