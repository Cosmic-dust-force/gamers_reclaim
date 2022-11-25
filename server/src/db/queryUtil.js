function generateInsertColumns(fields) {
  const insertColumns = Object.keys(fields)
    .map((key) => {
      return `"${key}"`;
    })
    .join(", ");

  return insertColumns;
}

function generateInsertValues(fields) {
  const insertValues = Object.keys(fields)
    .map((_, idx) => {
      return `$${idx + 1}`;
    })
    .join(", ");

  return insertValues;
}

function generateUpdateQuery(fields) {
  return Object.keys(fields)
    .map((column, index) => {
      return `"${column}"=$${index + 1}`;
    })
    .join(", ");
}

module.exports = {
  generateInsertColumns,
  generateInsertValues,
  generateUpdateQuery,
};
