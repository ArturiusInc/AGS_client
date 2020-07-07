const baseUrl = "http://localhost:3333/";

type Query = {
	url: string;
	method: "put" | "delete" | "post";
};

export const GET_PROJECTS: Query = { url: `${baseUrl}projects`, method: "post" };
export const CREATE_PROJECT: Query = { url: `${baseUrl}projects`, method: "put" };
export const REMOVE_PROJECT: Query = { url: `${baseUrl}projects`, method: "delete" };

export const GET_PROJECT: Query = { url: `${baseUrl}project`, method: "post" };
export const CREATE_DOOR_WINDOW: Query = { url: `${baseUrl}project`, method: "put" };
export const REMOVE_DOOR_WINDOW: Query = { url: `${baseUrl}project`, method: "delete" };
