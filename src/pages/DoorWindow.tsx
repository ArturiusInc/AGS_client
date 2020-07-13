import React, { FC, createRef, useEffect, useState, useCallback, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Construct, Leftinstrument, Rightinstrument, Midlecanvas } from "../themes/doorWindow";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export const DoorWindow: FC = () => {
	const { id, idwd } = useParams<{ id?: string; idwd?: string }>();
	const query = useQuery();
	const [ags, setAgs] = useState(query.get("ags"));
	const [wd, setWd] = useState(query.get("wd"));
	const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
	const [width, setWidth] = useState(1500);
	const [height, setHeight] = useState(1500);
	type prof = {
		x: number;
		y: number;
		width: number;
		height: number;
	};
	const profils: prof[] = []; // { x: 0, y: 0, width: 200, height: 200 }

	const karkas = useCallback(() => {
		console.log("ags && height:", ags && height);
		if (ags && height) {
			profils.push({ x: 0, y: 0, width: +ags, height: height });
			profils.push({ x: width - +ags, y: 0, width: +ags, height: height });
			profils.push({ x: +ags, y: 0, width: width - +ags * 2, height: +ags });
			profils.push({ x: +ags, y: height - +ags, width: width - +ags * 2, height: +ags });
		}
	}, [width, height, ags, profils]);

	useEffect(() => {
		karkas();
	}, [karkas]);

	useEffect(() => {
		console.log("profils:", profils);
		console.log("ctx:", ctx);
		if (ctx) {
			ctx.scale(0.3, 0.3);
			profils.forEach((profil) => {
				ctx.strokeRect(profil.x, profil.y, profil.width, profil.height);
			});
		}
	}, [profils, ctx]);

	return (
		<Construct>
			<Leftinstrument>
				<label htmlFor="">Система AGS: </label>
				<select name="" id="">
					<option value="50">AGS 50</option>
					<option value="68">AGS 68</option>
				</select>
				<br />
				<label htmlFor="">Профиль: </label>
				<select name="" id="">
					<option value="w">Оконный</option>
					<option value="d">Дверной</option>
				</select>
				<br />
			</Leftinstrument>
			<Midlecanvas>
				<canvas width="800" height="800" ref={(c: HTMLCanvasElement) => setCtx(c?.getContext("2d"))}>
					123
				</canvas>
			</Midlecanvas>
			<Rightinstrument>2</Rightinstrument>
		</Construct>
	);
};
