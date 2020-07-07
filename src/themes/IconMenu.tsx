import React, { Dispatch, SetStateAction } from "react";

export const IconMenu: React.FC<{ setissidebar: Dispatch<SetStateAction<boolean>>; issidebar: boolean }> = ({
	setissidebar,
	issidebar,
}) => {
	return (
		<svg
			fill="#fff"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="35px"
			height="35px"
			onClick={() => setissidebar(!issidebar)}
			style={{ cursor: "pointer" }}
		>
			<path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z" />
		</svg>
	);
};
