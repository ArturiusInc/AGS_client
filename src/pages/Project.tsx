import React, { FC, useMemo, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
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

	const projectTableList = useMemo(() => {
		return typeof doorsWindows === "object"
			? doorsWindows?.map((item: serverResDoorsWindows, i: number) => {
					return (
						<tr>
							<td>{item}</td>
							<td>{item}</td>
							<td>{item}</td>
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

	const handleClick = (num: number) => {
		console.log(num);
	};
	return (
		<div>
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
					{projectTableList}
				</table>
			)}
			<Button onClick={() => handleClick(1)}>Холодное окно</Button>
			<Button>Тёплое окно</Button>
			<Button>Холодная дверь</Button>
			<Button>Тёплая дверь</Button>
		</div>
	);
};
