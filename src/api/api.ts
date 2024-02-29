import axios, { AxiosResponse } from 'axios';
const API_URL = 'https://reqres.in/api';
interface User {
 email: string;
 password: string;
}
export const login = async (email: string, password: string): Promise<AxiosResponse<User>> => {
 const response = await axios.post<User>(`${API_URL}/login`, { email, password });
 return response.data;
};
export const register = async (email: string, password: string): Promise<AxiosResponse<User>> => {
 const response = await axios.post<User>(`${API_URL}/register`, { email, password });
 return response.data;
};