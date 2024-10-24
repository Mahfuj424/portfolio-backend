import { model, Schema } from "mongoose";
import { IEducation } from "./education.interface";

const EducationSchema = new Schema({
  educationName: { type: String, required: true },
  image: { type: String, required: true },
  instituteName: { type: String, required: true },
  department: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
});

const Education = model<IEducation>("Education", EducationSchema);

export default Education;
