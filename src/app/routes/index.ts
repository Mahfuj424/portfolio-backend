import { Router } from "express";
import { ProjectRoutes } from "../modules/project/project.route";
import { UserRoutes } from "../modules/user/user.route";
import { BlogRoutes } from "../modules/blog/blog.route";
import { LikeRoutes } from "../modules/like/like.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/project",
    route: ProjectRoutes,
  },
  {
    path: "/blog",
    route: BlogRoutes,
  },
  {
    path: "/likes",
    route: LikeRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
