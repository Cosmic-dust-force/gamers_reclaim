function modelFromDb(dbContact) {
  const { phone_number, ...modelContact } = dbContact;
  modelContact.phoneNumber = phone_number;
  return modelContact;
}

module.exports = { modelFromDb };
