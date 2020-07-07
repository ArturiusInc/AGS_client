import React from "react";
import { Link } from "react-router-dom";

export default function MenuSidebar() {
	return (
		<ul>
			<li>
				<Link to="/">Все проекты</Link>
			</li>
			<li>
				<Link to="/create">Создать проект</Link>
			</li>
			<li>
				<Link to="/">Выйти</Link>
			</li>
		</ul>
	);
}
