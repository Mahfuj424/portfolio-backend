import { model, Schema } from "mongoose";
import { IExperience } from "./experience.interface";

const ExperienceSchema = new Schema({
  companyName: { type: String, required: true },
  designation: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  image: { type: String, required: true },
});

const Experience = model<IExperience>("Experience", ExperienceSchema);

export default Experience;
