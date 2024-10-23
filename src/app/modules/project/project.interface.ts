export interface IProject {
  name: string;
  features: string[];
  description: string;
  image: string;
  category: string;
  technologyStack: string[];
  liveLink: string;
  serverRepo?: string;
  clientRepo?: string;
}
