function UserDoesNotExistError(email) {
  return {
    name: "UserDoesNotExistError",
    message: `User not found for email ${email}`,
  };
}

function UnexpectedServerError() {
  return { name: "UnexpectedServerError", message: "Sorry, unexpected error." };
}

function PasswordDoesNotMatchError() {
  return {
    name: "PasswordDoesNotMatchError",
    message: "Incorrect password for this user.",
  };
}

function AuthenticationRequiredError() {
  return {
    name: "AuthenticationRequiredError",
    message: "This action requires a valid user.",
  };
}

function AuthorizationRequiredError() {
  return {
    name: "AuthorizationRequiredError",
    message: "This action requires an authorized user.",
  };
}

module.exports = {
  UserDoesNotExistError,
  UnexpectedServerError,
  PasswordDoesNotMatchError,
  AuthenticationRequiredError,
  AuthorizationRequiredError,
};
