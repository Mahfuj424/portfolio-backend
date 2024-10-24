import { Types } from "mongoose";

export interface IBlog {
  title: string;
  description: string;
  image: string;
  category: string;
  likes: Types.ObjectId[];
  comments: Types.ObjectId[];
  views: Types.ObjectId[];
}
