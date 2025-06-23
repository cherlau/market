import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000',	
})

export const api = {
	get(endpoint){
		return axiosInstance.get(endpoint)
	},
	post(endpoint, data){
		return axiosInstance.post(endpoint, data)
	},
}
