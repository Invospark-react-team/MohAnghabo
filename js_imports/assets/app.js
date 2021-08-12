const user = require('./User');

async function addRandomUserToJSON() {
    return await user.createUser;
};

addRandomUserToJSON();