import React, { FC, useMemo, useCallback } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { Button } from "../themes/themeOne";
import { useGetDoorsWindows, serverResDoorsWindows } from "../serverApi/serverApi";
import deletIcon from "../themes/icons8-delete.svg";
import editIcon from "../themes/icons8-edit.svg";
import { IconButton } from "../components/iconButton";

export const Project: FC = () => {
	interface IdProject {
		id: string;
	}
	const { id } = useParams<IdProject>();
	const [doorsWindows, error, loading] = useGetDoorsWindows(id);
	let history = useHistory();

	const goToDoorWindow = useCallback(
		(projectId: number) => {
			history.push(`/project/${id}/${projectId}`);
		},
		[history, id]
	);

	const dwTableList = useMemo(() => {
		return doorsWindows.length
			? doorsWindows.map((item: serverResDoorsWindows, i: number) => {
					return (
						<tr>
							<td>{i}</td>
							<td>{item.ags}</td>
							<td>{item.glass}</td>
							<td style={{ display: "flex", flexDirection: "row" }}>
								<IconButton click={goToDoorWindow} id={i} icon={deletIcon}>
									Remove
								</IconButton>
								<IconButton click={goToDoorWindow} id={i} icon={editIcon}>
									Edit
								</IconButton>
							</td>
						</tr>
					);
			  })
			: "пусто";
	}, [doorsWindows, goToDoorWindow]);

	type newWindowDoor = (num: number, ags: 50 | 68, wd: "w" | "d") => void;

	const handleClick: newWindowDoor = (num, ags, wd) => {
		history.push(`/project/${id}/${num}?ags=${ags}&wd=${wd}`);
	};

	return (
		<div>
			{error ? <p>Ошибка попробуйте обновить страницу: {error}</p> : null}
			{loading ? (
				<p>Загрузка...</p>
			) : (
				<table>
					<tr>
						<td>№</td>
						<td>AGS</td>
						<td>Стеклопакет</td>
						<td>редактировать удалить</td>
					</tr>
					{dwTableList}
				</table>
			)}
			<Link to={`/project/${id}/${doorsWindows.length}?ags=${50}&wd=w`}>
				<Button onClick={() => handleClick(doorsWindows.length, 50, "w")}>Холодное окно</Button>
			</Link>
			<Button onClick={() => handleClick(doorsWindows.length, 68, "w")}>Тёплое окно</Button>
			<Button onClick={() => handleClick(doorsWindows.length, 50, "d")}>Холодная дверь</Button>
			<Button onClick={() => handleClick(doorsWindows.length, 68, "d")}>Тёплая дверь</Button>
		</div>
	);
};
