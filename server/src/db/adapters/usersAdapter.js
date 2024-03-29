const { client } = require("../");
const { generateInsertColumns, generateInsertValues } = require("../queryUtil");

async function createUser(fields) {
  try {
    const insertColumns = generateInsertColumns(fields);
    const insertValues = generateInsertValues(fields);

    const {
      rows: [user],
    } = await client.query(
      `
            INSERT INTO users (${insertColumns})
            VALUES (${insertValues})
            RETURNING id, name, email, user_role, contact_id;
        `,
      Object.values(fields)
    );

    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllUsers() {
  try {
    const { rows: users } = await client.query(`
            SELECT * FROM users;
        `);
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllCustomers() {
  try {
    const { rows: customers } = await client.query(`
                SELECT * FROM users
                WHERE user_role = 'customer'; 
            `);
    return customers;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getUserByEmail(email) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
            SELECT * FROM users
            WHERE email=$1;
        `,
      [email]
    );
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
            SELECT users.id, users.name, users.email, users.user_role, contacts.address, contacts.phone_number 
            FROM users
            LEFT JOIN contacts ON users.contact_id = contacts.id
            WHERE users.id=$1;
        `,
      [id]
    );

    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getAllCustomers,
  getUserByEmail,
  getUserById,
};
