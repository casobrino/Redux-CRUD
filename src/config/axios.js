import axios from "axios";

const baseURL = "http://localhost:3000/";
const clienteAxios = axios.create({
  baseURL,
});
export default clienteAxios;
