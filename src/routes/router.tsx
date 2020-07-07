import { AllProjects } from "../pages/AllProjects";
import { Project } from "../pages/Project";
import { FC } from "react";

type rout = {
	path: string;
	component: FC<{}>;
	title: string;
	exact?: boolean;
};

type routs = Array<rout>;

export const routes: routs = [
	{
		path: "/",
		component: AllProjects,
		title: "Все проекты",
		exact: true,
	},
	{
		path: "/project/:id",
		component: Project,
		title: "Проект",
	},
];
