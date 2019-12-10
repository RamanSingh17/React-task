
const baseURL="https://swapi.co/api/";
function getPlanets() {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`${baseURL}planets`, requestOptions).then(res=>{
        return res.json();
    })
}
function getPlanet(id){
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`${baseURL}planets/${id}`, requestOptions);
}


const planetService={
    getPlanets,
    getPlanet
}
export default  planetService;