import mongoose, {Schema, Document} from "mongoose";
import { title } from "process";

export interface IRecipe extends Document {
    title: string;
    category: string;
    ingredients: string[];
    instructions: string;
}

const recipeSchema: Schema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true }
});

export default mongoose.model<IRecipe>("Recipe", recipeSchema);