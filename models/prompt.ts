import {
  Document,
  Model,
  ObjectId,
  PopulatedDoc,
  Schema,
  model,
  models,
} from "mongoose";
import { IUser } from "./user";

export interface IPrompt extends Document {
  creator: PopulatedDoc<Document<ObjectId> & IUser>;
  prompt: string;
  tag: string;
}

const PromptSchema: Schema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Prompt: Model<IPrompt> = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
