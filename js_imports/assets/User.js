const axios = require('axios').default;

const addUser = async () => {
    // axios request for newUser (https://randomuser.me/api/)
    // JSON from newUser -> axios post -> db.json

    // res.data

    const res = await axios
        .post('http://localhost:9999/users', res.data);
    return res.data;
}

module.exports = {
    createUser: addUser()
}


// https://randomuser.me/
// https://randomuser.me/api/ -> new user