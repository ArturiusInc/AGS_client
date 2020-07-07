import React from "react";
import { BlutButton } from "../themes/themeOne";

export const IconButton: React.FC<{
	click: Function;
	id?: number | string | undefined;
	icon?: string;
}> = ({ click, id, icon, children }) => {
	return (
		<BlutButton onClick={() => (id ? click(id) : click())}>
			<img src={icon} alt="" />
			{children}
		</BlutButton>
	);
};
