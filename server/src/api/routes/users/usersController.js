const { hashPassword, passwordsDoMatch } = require('../../../../security');
const usersModel = require('../../../db/models/user');
const { UserDoesNotExistError, UnexpectedServerError, PasswordDoesNotMatch } = require('../../errors');

async function login(req, res, next){
    try {
        const {email, password} = req.body; 
        const user = await usersModel.getByEmail(email);
        if(!user) {
            return next(UserDoesNotExistError(email));
        }

        const isMatchingPassword = await passwordsDoMatch(password, user.password);
        
        if (!isMatchingPassword) {
            return next(PasswordDoesNotMatch());
        }
        
        res.json(user);

    } catch (error) {
        console.error(error);
        return next(UnexpectedServerError())
    }
}

module.exports = {
    login
}