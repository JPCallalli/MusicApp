import axios from "axios";

const servicioDeezer = (url, param, cant=1) => {


    const configAxios = {
      headers: {
        "X-RapidAPI-Key": "0ebebcd5aemsh5c38631760e3de6p1b5386jsn2351963e10ff",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
      params: { q: `${param}`, index :`${cant}` }
    }
  
     return axios.get(url, configAxios)
      .then((res) => {
        // console.log(res.data);
        return res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });

        
  }

export {
    servicioDeezer
}