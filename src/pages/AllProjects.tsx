import React, { FC, useMemo, useState, useCallback } from "react";
import { CreateProject } from "../components/CreateProject";
import { useGetProjects, useRemoveProject } from "../serverApi/serverApi";
import { IconButton } from "../components/iconButton";
import deletIcon from "../themes/icons8-delete.svg";
import editIcon from "../themes/icons8-edit.svg";
import { useHistory } from "react-router-dom";

export type serverAPIProject = { _id: string; name: string; wd: number };

export const AllProjects: FC = () => {
	const [projects, setProjects] = useState([]);
	const [error, loading] = useGetProjects(setProjects);
	const [setRemove] = useRemoveProject(setProjects);
	let history = useHistory();

	const goToProject = useCallback(
		(projectId: string) => {
			history.push(`/project/${projectId}`);
		},
		[history]
	);

	const projectsTableList = useMemo(() => {
		return typeof projects === "object"
			? projects.map((item: serverAPIProject) => {
					return (
						<tr>
							<td>{item._id}</td>
							<td>{item.name}</td>
							<td>{item.wd}</td>
							<td style={{ display: "flex", flexDirection: "row" }}>
								<IconButton click={setRemove} id={item._id} icon={deletIcon}>
									Remove
								</IconButton>
								<IconButton click={goToProject} id={item._id} icon={editIcon}>
									Edit
								</IconButton>
							</td>
						</tr>
					);
			  })
			: "пусто";
	}, [projects, setRemove, goToProject]);

	return (
		<>
			{error ? <p>Ошибка попробуйте обновить страницу: {error}</p> : null}
			{loading ? (
				<p>Загрузка...</p>
			) : (
				<table>
					<tr>
						<td>Номер</td>
						<td>Имя</td>
						<td>Количество окон дверей</td>
						<td>редактировать удалить</td>
					</tr>
					{projectsTableList}
				</table>
			)}
			<CreateProject projectsss={setProjects}></CreateProject>
		</>
	);
};
