const user = require("./User");

async function getUser() {
    console.log(await user.getUser());
}

getUser();