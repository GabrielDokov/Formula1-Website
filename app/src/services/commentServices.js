import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {

    const request = requestFactory(token);
    
     const getAll = async (driverId) => {
        const searchQuery = encodeURIComponent(`driverId="${driverId}"`);
        const relationQuery = encodeURIComponent(`author=_ownerId:users`);
        
        const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
        const comments = Object.values(result);
        
        return comments;
    };
    
     const create = async (driverId, comment) => {
        const result = await request.post(baseUrl, { driverId, comment });
        
        return result;
    };

    return {
        getAll,
        create
    }
}