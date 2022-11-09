const bcrypt = require('bcrypt');

async function hashPassword(password){
  const SALT_COUNT = 10;

  return await bcrypt.hash(password, SALT_COUNT);
}

async function passwordsDoMatch(pass1, pass2) {
    return await bcrypt.compare(pass1, pass2);
}

module.exports = {
    hashPassword,
    passwordsDoMatch
}