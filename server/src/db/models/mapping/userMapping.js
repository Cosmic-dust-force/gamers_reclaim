function modelFromDb(dbUser) {
  const { contact_id, user_role, ...modelUser } = dbUser;
  modelUser.contactId = contact_id;
  modelUser.userRole = user_role;

  return modelUser;
}

function dbFromModel(modelUser) {
  const { userRole, contactId = null, ...dbUser } = modelUser;

  dbUser.contact_id = contactId;
  dbUser.user_role = userRole;

  return dbUser;
}

module.exports = { modelFromDb, dbFromModel };
