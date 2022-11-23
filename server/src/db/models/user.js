const client = require("../client");

const {
  getUserByEmail,
  getUserById,
  createUser,
} = require("../adapters/usersAdapter");
const { createContact } = require("../adapters/contactsAdapter");
const userMapper = require("./mapping/userMapping");

async function getAll() {
  const { rows: users } = await client.query(`
      SELECT users.*, contacts.* FROM users
      JOIN contacts ON users.contact_id = contacts.id;
  `);
  return users;
}

async function getByEmail(email) {
  const dbUser = await getUserByEmail(email);
  if (!dbUser) {
    return;
  }

  const modelUser = userMapper.modelFromDb(dbUser);

  return modelUser;
}

async function getById(id) {
  const dbUser = await getUserById(id);
  if (!dbUser) {
    return;
  }

  const modelUser = userMapper.modelFromDb(dbUser);

  return modelUser;
}

async function create(user) {
  const { address, phoneNumber, ...userData } = user;
  const dbUser = userMapper.dbFromModel(userData);

  const userContact = { address, phoneNumber };

  const { id: contactId } = await createContact(userContact);

  dbUser.contact_id = contactId;

  const newUser = await createUser(dbUser);

  return newUser;
}

module.exports = {
  getAll,
  getByEmail,
  getById,
  create,
};
