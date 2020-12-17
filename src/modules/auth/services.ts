import request from "../../services/api/request";
import { IStudent } from "../../services/models/Student.interface";
import { ILoginForm } from "../../components/login-form/LoginForm";
import { IUser } from "../../services/models/User.interface";
export interface IStudentParams {
    page: number,
    limit: number
}

const ApiService = {
    login(form: ILoginForm) {
        return request.post('login', form);
    },
    signup(form: IUser) {
        return request.post('user/register', form);
    },
}
export default ApiService