import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);

export const addexpenses = (expenseData) => API.post("/expenses", expenseData);
export const viewexpenses = () => API.get("/viewexpenses");
export const removeexpenses = (id) => API.delete(`/viewexpenses/${id}`);
