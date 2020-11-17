import request from "../../services/api/request";

export const fetchUsersRequest = () => {
    return request.get('user');
}