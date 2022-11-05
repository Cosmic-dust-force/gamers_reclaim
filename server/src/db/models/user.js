const client = require('../client');

module.exports = {
  // add your database adapter fns here
  getAll,
};

async function getAll() {
  const {rows: users} = await client.query(`
      SELECT users.*, contacts.* FROM users
      JOIN contacts ON users.contact_id = contacts.id;
  `);
  return users;
}
