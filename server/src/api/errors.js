function UserDoesNotExistError(email) {
  return {
    name: "UserDoesNotExistError",
    message: `User not found for email ${email}`,
  };
}

function UnexpectedServerError() {
  return { name: "UnexpectedServerError", message: "Sorry, unexpected error." };
}

function PasswordDoesNotMatch() {
  return {
    name: "PasswordDoesNotMatch",
    message: "Incorrect password for this user.",
  };
}

function AuthenticationRequired() {
  return {
    name: "AuthenticationRequired",
    message: "This action requires a valid user.",
  };
}

module.exports = {
  UserDoesNotExistError,
  UnexpectedServerError,
  PasswordDoesNotMatch,
  AuthenticationRequired,
};
