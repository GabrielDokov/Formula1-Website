import {requestFactory} from './requester'


const baseUrl = 'http://localhost:3030/data/teams';


export const TeamFactory = (token) => {
    const request = requestFactory(token) 

      const getAllTeams =  async () => {
      const result = await request.get(baseUrl)
      const teams = Object.values(result);
     return teams
    
    }
    
     const getOne = async(teamId) => {
        const result = await request.get(`${baseUrl}/${teamId}`);
        return result;
    }

    const delOne = async(teamId) => {
        const result = await request.del(`${baseUrl}/${teamId}`)
        console.log(result)
        return result
    }
    
    const editOne = async(teamId,teamData) => {
        const result = await request.put(`${baseUrl}/${teamId}`, teamData);
        console.log(result);
        return result;
    }

    return {
        getAllTeams,
        getOne,
        delOne,
        editOne,
    }
}
