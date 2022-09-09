import axios from "axios";

let BASE_URL = "http://localhost:5000/";

function postSignUp(body) {
  let promisse = axios.post(`${BASE_URL}sign-up`, body);
  return promisse;
}

function postLogin(body) {
  let promisse = axios.post(`${BASE_URL}sign-in`, body);
  return promisse;
}

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("mywallet")).token;
  const config = { headers: { Authorization: `Bearer ${auth}` } };
  return config;
}

function getRegisters() {
  const headers = createHeaders();
  let promisse = axios.get(`${BASE_URL}registers`, headers);
  return promisse;
}

function postRegister(body) {
  const headers = createHeaders();
  let promisse = axios.post(`${BASE_URL}registers`, body, headers);
  return promisse;
}

export { getRegisters, postRegister, postSignUp, postLogin };
