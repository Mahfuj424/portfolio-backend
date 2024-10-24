// models/Like.ts
import { model, Schema } from "mongoose";

const TechSkills = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export const TechSkill = model("TechSkill", TechSkills);
