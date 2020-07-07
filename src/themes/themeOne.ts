import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px;
	background-color: #86b1ff;
	color: #fff;
	user-select: none;
`;

export const Main = styled.div`
	width: 100vw;
	display: flex;
	flex: 1 1 auto;
`;

export const Sidebar = styled.div`
	transition: all 1s;
	width: 280px;
	background-color: #ccc;
`;

export const MainContent = styled.div`
	padding: 10px;
`;

export const Button = styled.button`
	padding: 3px 10px;
	border: none;
	border-radius: 3px;
	background-color: #86b1ff;
	color: #fff;
	cursor: pointer;
`;

export const BlutButton = styled.button`
	padding: 3px 10px;
	border: none;
	border-radius: 3px;
	background-color: #86b1ff;
	color: #fff;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-right: 5px;
`;
