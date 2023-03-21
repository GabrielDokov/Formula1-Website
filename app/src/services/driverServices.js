import * as request from './requester'

const baseUrl = 'http://localhost:3030/jsonstore/drivers';

export const getAll =  async () => {

 const result = await request.get(baseUrl)
 const drivers = Object.values(result);
 return drivers

}

export const create = async (driverData) => {
    const result = await request.post(baseUrl,driverData);

    // console.log(result);

    return result
}

export const getOne = async(driverId) => {
    const result = await request.get(`${baseUrl}/${driverId}`)
    // console.log(result);
    return result
}

export const delOne = async(driverId) => {
    const result = await request.del(`${baseUrl}/${driverId}`)
    console.log(result)
    return result
}