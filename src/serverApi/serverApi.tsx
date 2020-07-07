import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { CREATE_PROJECT, GET_PROJECTS, REMOVE_PROJECT, GET_PROJECT } from "./urlConst";

export type serverResDoorsWindows = {
	climat: "cold" | "hot";
};

export const useGetDoorsWindows = (projectId: string) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [doorsWindows, setDoorsWindows] = useState<serverResDoorsWindows[] | null>(null);

	useEffect(() => {
		const getDoorsWindows = async (id: string) => {
			setLoading(true);
			try {
				const response: AxiosResponse<serverResDoorsWindows[]> = await axios({
					method: GET_PROJECT.method,
					url: GET_PROJECT.url,
					data: { id },
				});
				setDoorsWindows(response.data);
			} catch (error) {
				console.log("error");
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		if (projectId) {
			getDoorsWindows(projectId);
		}
	}, [projectId]);
	return [doorsWindows, error, loading];
};

type createProjectRes = {
	id: string;
	projects: never[];
};

export const useCreateProject = (projectName: string) => {
	const [isLoading, setIsLoading] = useState(false);
	const [projectId, setProjectId] = useState("");
	const [projectss, setProjectss] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		const createProject = async () => {
			setIsLoading(true);
			try {
				const response = await axios({ method: CREATE_PROJECT.method, url: CREATE_PROJECT.url, data: { projectName } });
				const res: createProjectRes = response.data;
				setProjectId(res.id);
				setProjectss(res.projects);
			} catch (error) {
				console.log("error:", error);
				setError(true);
			} finally {
				setIsLoading(false);
			}
		};
		if (projectName !== "") {
			createProject();
		}
	}, [projectName]);

	return [projectId, error, isLoading, projectss];
};

export const useGetProjects = (setProjects: React.Dispatch<React.SetStateAction<never[]>>) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getProjects = async () => {
			setIsLoading(true);
			try {
				const response = await axios({ method: GET_PROJECTS.method, url: GET_PROJECTS.url });
				setProjects(response.data);
			} catch (error) {
				console.log("error:", error);
				setError(true);
			} finally {
				setIsLoading(false);
			}
		};
		//if (projects.length === 0) {
		getProjects();
		//}
	}, [setProjects]);

	return [error, isLoading];
};

export const useRemoveProject = (setProjects: React.Dispatch<React.SetStateAction<never[]>>) => {
	const [removeId, setremoveId] = useState("");

	useEffect(() => {
		const removeProject = async () => {
			try {
				const response = await axios({
					method: REMOVE_PROJECT.method,
					url: REMOVE_PROJECT.url,
					data: { data: { removeId } },
				});
				setProjects(response.data);
			} catch (error) {
				console.log("error:", error);
			}
		};
		if (removeId !== "") {
			removeProject();
		}
	}, [removeId, setProjects]);

	const setRemove = (id: string) => {
		setremoveId(id);
	};

	return [setRemove];
};
