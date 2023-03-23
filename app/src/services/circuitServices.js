import * as request from './requester'

const baseUrl = 'http://localhost:3030/jsonstore/circuits';

export const getAllCircuits =  async () => {

 const result = await request.get(baseUrl)
 
 const circuits = Object.values(result);

//  console.log(circuits)

 return circuits

}