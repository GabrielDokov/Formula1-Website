import * as request from './requester'


const baseUrl = 'http://localhost:3030/jsonstore/teams';

export const getAllTeams =  async () => {

    const result = await request.get(baseUrl)
 
 const teams = Object.values(result);
 
//  console.log(teams)

 return teams

}

export const getOne = async(teamId) => {
    const result = await request.get(`${baseUrl}/${teamId}`)
    // console.log(result);
    return result
}