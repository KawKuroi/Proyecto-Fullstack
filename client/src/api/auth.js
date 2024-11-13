import axios from "./axios"

const API = 'http://localhost:3000/api'

export const registerRequest = async (user) => axios.post(`/registro`, user);

export const loginRequest = async user => axios.post(`/login`, user); 

export const vehicleRequest = async () => axios.get(`/vehiculos`); 