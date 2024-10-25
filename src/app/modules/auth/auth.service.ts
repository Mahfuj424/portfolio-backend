import { User } from "../user/user.model";
import { IUser } from "../user/user.interface"; // Import the IUser interface

const createLoginIntoDB = async (email: string, password: string) => {
  try {
    // Find the user by email and cast the result to IUser type
    const findUser = (await User.findOne({ email })) as IUser | null;

    if (!findUser) {
      // If user is not found, return an error
      return { success: false, message: "User not found" };
    }

    // Directly compare the provided password with the one stored in the database
    if (password !== findUser.password) {
      // If password does not match, return an error
      return { success: false, message: "Invalid password" };
    }

    // If login is successful, return the user data
    return { success: true, message: "Login successful", user: findUser };
  } catch (error) {
    // Handle any potential errors
    return { success: false, message: "Error logging in", error };
  }
};

export const AuthServices = {
  createLoginIntoDB,
};
