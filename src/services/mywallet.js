import axios from "axios";

let BASE_URL = "http://localhost:5000/";

function getRegisters() {
  let promisse = axios.get(`${BASE_URL}getRegisters`);
  return promisse;
}

function postRegister(body) {
  let promisse = axios.post(`${BASE_URL}register`, body);
  return promisse;
}

export { getRegisters, postRegister };
