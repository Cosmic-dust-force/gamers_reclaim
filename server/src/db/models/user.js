const client = require('../client');

const {
  getUserByEmailDb
} = ('../adapters/usersAdapter')

async function getAll() {
  const {rows: users} = await client.query(`
      SELECT users.*, contacts.* FROM users
      JOIN contacts ON users.contact_id = contacts.id;
  `);
  return users;
}

async function getUserByEmail(email){
  const dbUser = await getUserByEmailDb(email);

  const {contact_id, user_role, ...modelUser} = dbUser;
  modelUser.contactId = contact_id; 
  modelUser.userRole = user_role; 

  return modelUser; 
}

module.exports = {
  // add your database adapter fns here
  getAll,
  getUserByEmail
};
