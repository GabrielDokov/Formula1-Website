import {requestFactory} from './requester'

const baseUrl = 'http://localhost:3030/data/drivers';





export const driverServiceFactory = (token) => {
    const request = requestFactory(token)  

    const getAll =  async () => {
        const result = await request.get(baseUrl)
        const drivers = Object.values(result);
        return drivers
       
       }
       
        const create = async (driverData) => {
           const result = await request.post(baseUrl,driverData);
       
           // console.log(result);
       
           return result
       }
       
        const getOne = async(driverId) => {
           const result = await request.get(`${baseUrl}/${driverId}`)
           // console.log(result);
           return result
       }
       
        const delOne = async(driverId) => {
           const result = await request.del(`${baseUrl}/${driverId}`)
           console.log(result)
           return result
       }
       
        const putOne = async(driverId) => {
           const result = await request.put(`${baseUrl}/${driverId}`);
           console.log(result);
           return result;
       }
       
        const edit = async(driverData,driverId) => {
           const result = await request.put(`${baseUrl}/${driverId}`, driverData);
           console.log(result);
           return result;
       }

       return {
        getAll,
        create,
        getOne,
        delOne,
        putOne,
        edit
       }
}
