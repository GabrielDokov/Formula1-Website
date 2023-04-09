import {requestFactory} from './requester';


const baseUrl = 'http://localhost:3030/users';


export const authServiceFactory = (token) => {
   const request = requestFactory(token)    
   return {

     login:(loginData) => {
         return request.post(`${baseUrl}/login`,loginData)
      },
      
       register:(registerData) => {
         return request.post(`${baseUrl}/register`, registerData)
      },
      
      logout:(accessToken) => {
        return request.get(`${baseUrl}/logout`, {
         headers:{
            'X-Authorization': accessToken
         }
        })
        
         }
   }
}