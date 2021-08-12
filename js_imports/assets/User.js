const axios = require('axios').default;

async function getRandomUser() {
    const response = await axios.get('http://randomuser.me/api/?inc=gender,name,nat');
    return response.data.results[0];
}

async function addUserToJSON(user) {
    const response = await axios.post('http://localhost:9999/users', user);
    return response.data;
}

async function addUser() {
    const getUser = await getRandomUser();
    const userToJson = await addUserToJSON(getUser);
    return userToJson;
}
module.exports = {
    createUser: addUser()
}


// https://randomuser.me/
// https://randomuser.me/api/ -> new user