import { Request } from "express";
import { Model } from "mongoose";
import { MongoError } from "mongodb";

// Poduct interface
export interface IProject {
  title: string;
  description: number;
  image: string;
  github: string;
  live: string;
}

// User interfaces
export type UserModel = Model<IUser, { [_ in never]: never }, IUserMethods>;

export interface IUserMethods {
  createJWT(): string;
  checkPassword(candidatePassword: string): Promise<boolean>;
}

export interface IRegisterRequest extends Request {
  body: IUser;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  lastName?: string;
  location?: string;
}

export interface IUpdateUserRequest extends Request {
  body: IUpdateUser;
}

export interface IUpdateUser {
  _id?: string;
  name?: string;
  lastName?: string;
  email?: string;
  location?: string;
}

// Stats interfaces

export interface IStats {
  _id: string;
  count: number;
}

export interface IResultStats {
  pending: number;
  interview: number;
  declined: number;
  [x: string]: number;
}

export interface IMontlyApplications {
  _id: { year: number; month: number };
  count: number;
}

// Auth interfaces
export interface ILoginRequest extends Request {
  body: ILogin;
}

export interface ILogin {
  email: string;
  password: string;
}

// Validation interfaces
export type CustomRequest =
  | IRegisterRequest
  | ILoginRequest
  | IUpdateUserRequest;

export type CustomBody = ILogin | IUser | IUpdateUser;

// JWT interfaces
export interface IDecodedToken {
  id: number;
  username: string;
  iat: number;
  exp: number;
}

export interface IDecodedToken {
  userId: string;
  username: string;
  iat: number;
  exp: number;
}

// Error interfaces
export interface IDuplicateMongoError extends MongoError {
  keyValue: {
    [x: string]: string;
  };
}

export interface IRequiredMongoError extends MongoError {
  errors: {
    [x: string]:
      | { [y: string]: string }
      | { [y: string]: { [z: string]: string } };
  };
}

export interface ICastMongoError extends MongoError {
  reason: { [x: string]: string };
  value: string;
}
