import { FC } from "react";
import { AllProjects } from "../pages/AllProjects";
import { Project } from "../pages/Project";
import { DoorWindow } from "../pages/DoorWindow";

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
		exact: true,
	},
	{
		path: "/project/:id/:idwd",
		component: DoorWindow,
		title: "Дверь окно",
	},
];
