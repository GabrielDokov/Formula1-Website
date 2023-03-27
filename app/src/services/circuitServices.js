import {requestFactory} from './requester'

const baseUrl = 'http://localhost:3030/jsonstore/circuits';

export const circuitsFactory = (token) => {
    const request = requestFactory(token) 

    const getAllCircuits =  async () => {
    
     const result = await request.get(baseUrl)
     
     const circuits = Object.values(result);
    
     return circuits
}

return {
    getAllCircuits
}


}