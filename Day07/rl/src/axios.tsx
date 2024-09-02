import axios from 'axios'; // npm install axios

const api = axios.create({
    baseURL:" http://127.0.0.1:5000" // replace this with the base URL
    headers : {
        "Content-Type" : "application/json",
    },
});

export default api;