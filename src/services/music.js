import axios from 'axios';

const apiUrl ='http://localhost:8001';

export function getData(contents) {
    const api = 'https://billboard-api2.p.rapidapi.com/hot-100';
    const params = {
        date: contents.date,
        range: '1-10'
      };
    
      const options = {
        params,
        headers: {
          'x-rapidapi-key': 'f4ec6d0610msh436e72a9a07591ep1c5737jsn3b045f345ac8',
          'x-rapidapi-host': 'billboard-api2.p.rapidapi.com'
        }
      };
      console.log(options);
    return axios.get(api, options)
      .then((res)=>{
        return res;
      })
      .catch((error) => {
        console.error('Error fetching Billboard data:', error);
        throw error;
      });
  }

  export function spotifyData(contents){
    const api = "https://spotify23.p.rapidapi.com/search/"

    const options = {
        params: {
          q: contents.artist,
          type: 'artists',
          offset: '0',
          limit: '10',
          numberOfTopResults: '5'
        },
        headers: {
          'x-rapidapi-key': '4e22e85a8dmsh8eea4396f21ec2fp1a7f5ajsn685520c16698',
          'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
      };
      console.log(options);
      return axios.get(api, options)
      .then((res)=>{
        return res;
      })
      .catch((error) => {
        console.error('Error fetching Billboard data:', error);
        throw error;
      });
  }
  export function createMusic(contents) {
    const api = `${apiUrl}/music`;
    const content = {
      name: contents.name,
      artist: contents.artist,
    };
    return axios.post(api, content)
      .then((res)=>{
        return res;
      });
  }
  export function getAllMusics() {
    return axios.get(`${apiUrl}/music`)
      .then(res => res.data)
      .catch(error => {
        throw error.response.data; 
      });
  }
