import request from "../../services/api/request";
import { IStudent } from "../../services/models/Student.interface";
import { ILoginForm } from "../../components/login-form/LoginForm";
export interface IStudentParams {
    page: number,
    limit: number
}

const ApiService = {
    login(form: ILoginForm) {
        return request.post('login', form);
    },
}
export default ApiService