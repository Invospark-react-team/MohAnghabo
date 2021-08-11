const axios = require('axios').default;

module.exports = {
    getUser: async () => {
        const res = await axios.get('https://randomuser.me/api/');
        return await res.data.results[0];
    }
}