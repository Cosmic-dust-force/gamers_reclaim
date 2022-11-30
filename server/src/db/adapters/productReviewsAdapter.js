const { client } = require("../");
const {
    generateInsertColumns,
    generateInsertValues
} = require("../queryUtil");



async function getAllProductReviews() {
    try {
        const { rows: reviews } = await client.query(`
            SELECT * FROM product_reviews
        `)

        return reviews;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function createProductReview(fields) {
    const insertValues = generateInsertValues(fields);
    const insertColumns = generateInsertColumns(fields);

    try {
        const { rows: [productReview] } = await client.query(`
            INSERT INTO product_reviews (${insertColumns})
            VALUES (${insertValues})
            RETURNING *
        `,
            Object.values(fields)
        );

        return productReview; 
    } catch (error) {
        console.error(error);
        throw error;
    }
}


module.exports = {
    getAllProductReviews,
    createProductReview
}