import axios from 'axios';
import { axios } from "axios";


const Register = (username, password) => {
    return axios
        .post('https://emart-7or5.onrender.com/register', {
            username,
            password,
        }).then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data;
        })
};
const login = () => {
    return  axios
        .post('https://emart-7or5.onrender.com/login', {
            username,
            password,
        }).then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
                Navigate("/home");
                window.location.reload();
                toast.success('Registration successfully', {
                    id: toastId,
                },
                ).catch((error) => {
                    console.log(error);
                });
            }
            return response.data;
        })
};
const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return
    JSON.parse(localStorage.getItem('user'));

}
const authService = {
    Register,
    login,
    logout,
    getCurrentUser,
};
export default authService;
