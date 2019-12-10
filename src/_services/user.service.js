
const baseURL="https://swapi.co/api/";
function getUsers() {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`${baseURL}people`, requestOptions).then(res=>{
        return res.json();
    })
}
function getUser(id){
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`${baseURL}people/${id}`, requestOptions);
}

const userService={
    getUsers,
    getUser
}
export default  userService;