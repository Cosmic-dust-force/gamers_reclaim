const { client } = require("../");

async function createContact({address, phoneNumber}) {
    try {
        const {rows: [contact]} = await client.query(`
            INSERT INTO contacts("address", "phone_number")
            VALUES($1, $2)
            RETURNING *;
        `, [address, phoneNumber]);

        return contact;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getAllContacts() {
    try {
        const {rows: contacts} = await client.query(`
            SELECT * FROM contacts;
        `);
        
        return contacts;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createContact,
    getAllContacts
}