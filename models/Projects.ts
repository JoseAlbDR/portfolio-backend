import mongoose from "mongoose";
import { IProject } from "../types/interfaces";

const ProjectSchema = new mongoose.Schema<IProject>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  live: {
    type: String,
    required: true,
  },
});

export const Project = mongoose.model<IProject>("Project", ProjectSchema);
