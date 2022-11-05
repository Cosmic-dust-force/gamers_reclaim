const { client } = require("../");

async function createUser(fields) {
    try {
        const insertColumns = Object.keys(fields)
        .map((key) => {
            return `"${key}"`;
        })
        .join(", ");

        const insertValues = Object.keys(fields)
        .map((_, idx) => {
            return `$${idx + 1}`;
        })
        .join(", ");

        const { rows: [ user ]} = await client.query(`
            INSERT INTO users (${insertColumns})
            VALUES (${insertValues})
            RETURNING *;
        `, Object.values(fields));
        
        console.log("quah", user);
        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    createUser
}