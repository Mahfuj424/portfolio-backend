import { Router } from "express";
import { ProjectRoutes } from "../modules/project/project.route";
import { UserRoutes } from "../modules/user/user.route";
import { BlogRoutes } from "../modules/blog/blog.route";
import { LikeRoutes } from "../modules/like/like.route";
import { CommentRoutes } from "../modules/comment/comment.route";
import { ViewsRoutes } from "../modules/views/views.route";
import { TechSkillRoutes } from "../modules/techSkills/techSkills.route";
import { SoftSkillRoutes } from "../modules/softSkills/softSkills.route";
import { EducationRoutes } from "../modules/education/education.route";
import { ExperienceRoutes } from "../modules/experience/experience.route";
import { AuthRoutes } from "../modules/auth/auth.route";

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
  {
    path: "/comment",
    route: CommentRoutes,
  },
  {
    path: "/views",
    route: ViewsRoutes,
  },
  {
    path: "/tech",
    route: TechSkillRoutes,
  },
  {
    path: "/soft",
    route: SoftSkillRoutes,
  },
  {
    path: "/education",
    route: EducationRoutes,
  },
  {
    path: "/experience",
    route: ExperienceRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
