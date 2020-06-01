import http from "./httpService";
const usersAPIEndPoint = "/users";

export function registerUser(user) {
  return http.post(usersAPIEndPoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

export function getUser(id) {
  return http.get(usersAPIEndPoint + "/" + id);
}
