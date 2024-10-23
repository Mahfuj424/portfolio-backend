import { model, Schema } from "mongoose";
import { IProject } from "./project.interface";

const projectSchema = new Schema<IProject>(
  {
    name: {
      type: String,
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    technologyStack: {
      type: [String],
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
    serverRepo: {
      type: String,
    },
    clientRepo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Project = model<IProject>("Project", projectSchema);
