const client = require("../client");

const {
  getUserByEmail,
  getUserById,
  createUser,
} = require("../adapters/usersAdapter");
const { createContact } = require("../adapters/contactsAdapter");
const userMapper = require("./mapping/userMapping");
const contactMapper = require("./mapping/contactMapping");

async function getAll() {
  const { rows: users } = await client.query(`
      SELECT users.*, contacts.* FROM users
      JOIN contacts ON users.contact_id = contacts.id;
  `);
  return users;
}

async function getAllCustomers() {
  const { rows: customers } = await client.query(`
      SELECT users.id, users.name, users.email, users.user_role, users.contact_id, contacts.* 
      FROM users
      JOIN contacts ON users.contact_id = contacts.id
      WHERE user_role = 'customer';
  `);
  const modelCustomers = customers.map((dbCustomer) => {
    const { address, phone_number, ...dbUser } = dbCustomer;

    const modelUser = userMapper.modelFromDb(dbUser);
    const modelContact = contactMapper.modelFromDb({ address, phone_number });

    const modelCustomer = { ...modelUser, ...modelContact };

    return modelCustomer;
  });

  return modelCustomers;
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
  getAllCustomers,
  getByEmail,
  getById,
  create,
};
