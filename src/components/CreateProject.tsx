import React, { useState, useEffect, FC } from "react";
import { Button } from "../themes/themeOne";
import { useCreateProject } from "../serverApi/serverApi";

type createProjectProps = {
	projectsss: React.Dispatch<React.SetStateAction<never[]>>;
	children?: never;
};

export const CreateProject: FC<createProjectProps> = ({ projectsss }) => {
	const [projectName, setProjectName] = useState("");
	const [query, setQuery] = useState("");
	// TODO: если посторяеться имя проекта, то query не меняеться и не запускаеться useCreateProject.
	const [projectId, error, loading, projects] = useCreateProject(query);

	useEffect(() => {
		if (projectId !== "" && !error && typeof projects === "object") {
			projectsss(projects);
		}
	}, [projectId, error, projectsss, projects]);

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setQuery(projectName);
					setProjectName("");
				}}
			>
				<label>Имя проекта: </label>
				<input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
				{loading ? "Loading" : <Button>Создать</Button>}
			</form>
		</div>
	);
};
