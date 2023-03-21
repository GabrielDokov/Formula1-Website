import * as request from './requester';


const baseUrl = 'http://localhost:3030/users/login';

export const login = (loginData) => {
   return request.post(`${baseUrl}`,loginData)
}