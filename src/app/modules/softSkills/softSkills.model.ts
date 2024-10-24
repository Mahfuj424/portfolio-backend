// models/Like.ts
import { model, Schema } from "mongoose";

const SoftSkills = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const SoftSkill = model("SoftSkill", SoftSkills);
