import express from "express";
import {
  createProject,
  getAllProjects,
} from "../controllers/projectController";
import { uploadProjectImage } from "../controllers/uploadsController";

const router = express.Router();

router.route("/").get(getAllProjects).post(createProject);
router.route("/uploads").post(uploadProjectImage);

export default router;
