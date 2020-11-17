import request from "../../services/api/request";

export const fetchStudentsRequest = () => {
    return request.get('student');
}