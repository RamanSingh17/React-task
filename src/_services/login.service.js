const baseURL="https://swapi.co/api/";
function validUser(username, password) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`${baseURL}people`, requestOptions);
}

const userService={
    getUsers,
    getUser
}
export default  userService;