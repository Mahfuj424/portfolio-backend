/* eslint-disable @typescript-eslint/no-explicit-any */

import { User } from "./user.model";

const createUserIntoDB = async (name: any, email: any, image: any) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists!!");
  }
  const result = await User.create({ name, email, image });
  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getSingleUserFromDB,
};
