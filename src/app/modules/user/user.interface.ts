export interface IUser {
  password?: string;
  name: string;
  email: string;
  image: string;
  role: "user" | "admin";
}
