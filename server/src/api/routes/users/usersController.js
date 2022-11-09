const {
    getUserByEmail,
} = require('../../../db/models/user');

async function login(req, res, next){
    try {
        const {email, password} = req.body; 
        const user = await getUserByEmail(email);
        res.json(user); 
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    login
}