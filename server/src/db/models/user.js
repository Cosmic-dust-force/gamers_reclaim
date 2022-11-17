const client = require('../client');

const {
  getUserByEmail, createUser
} = require('../adapters/usersAdapter');
const { createContact } = require('../adapters/contactsAdapter');

async function getAll() {
  const {rows: users} = await client.query(`
      SELECT users.*, contacts.* FROM users
      JOIN contacts ON users.contact_id = contacts.id;
  `);
  return users;
}

async function getByEmail(email){
  const dbUser = await getUserByEmail(email);
  if (!dbUser) {
    return;
  }
  
  const {contact_id, user_role, ...modelUser} = dbUser;
  modelUser.contactId = contact_id; 
  modelUser.userRole = user_role; 

  return modelUser; 
}

async function create(user){
  
  const {userRole, address, phoneNumber, ...dbUser} = user;

  const userContact = {address, phoneNumber};

  const { id: contactId } = await createContact(userContact);

  dbUser.contact_id = contactId; 
  dbUser.user_role = userRole; 

  
  const newUser = await createUser(dbUser);
  return newUser;
}

module.exports = {
  // add your database adapter fns here
  getAll,
  getByEmail,
  create
};
