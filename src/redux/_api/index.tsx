import Http from "../../lib/api";

export const getUsers = () => {
    return Http.get(`/users`);
}