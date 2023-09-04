import { Request, Response } from "express";
import { Project } from "../models/Projects";
import { StatusCodes } from "http-status-codes";
import { IProject } from "../types/interfaces";

export const createProject = async (req: Request, res: Response) => {
  console.log(req.body);
  const project = await Project.create(req.body);
  res.status(StatusCodes.CREATED).json(project);
};

export const getAllProjects = async (_req: Request, res: Response) => {
  const projects: IProject[] = await Project.find({}).sort("updateAt");
  res.status(StatusCodes.OK).json({ projects });
};
