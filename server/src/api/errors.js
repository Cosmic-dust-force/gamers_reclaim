function UserDoesNotExistError(email) {
  return {
    name: "UserDoesNotExistError",
    message: `User not found for email ${email}`,
  };
}

function UserAlreadyExistsError(email) {
  return {
    name: "UserAlreadyExistsError",
    message: `User already exists with email ${email}`,
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

function ProductAlreadyExistsError(productName) {
  return {
    name: "ProductAlreadyExistsError",
    message: `A product with the name ${productName} already exists.`,
  };
}

function ItemInCartError() {
  return {
    name: "ItemInCartError",
    message: "This item is already in the users cart.",
  };
}

function InsufficientInventoryError(remainingUnits) {
  return {
    name: "InsufficientInventoryError",
    message: `There are only ${remainingUnits} remaining units.`,
  };
}

function OrderRequiresItemsInCartError(remainingUnits) {
  return {
    name: "OrderRequiresItemsInCartError",
    message: `Creating an order requires at least one item to be in the cart.`,
  };
}

function FileIsNotImageError() {
  return {
    name: "FileIsNotImageError",
    message: `The file you have tried to submit is not an image.`,
  };
}

module.exports = {
  UserDoesNotExistError,
  UserAlreadyExistsError,
  UnexpectedServerError,
  PasswordDoesNotMatchError,
  AuthenticationRequiredError,
  AuthorizationRequiredError,
  ProductAlreadyExistsError,
  ItemInCartError,
  InsufficientInventoryError,
  OrderRequiresItemsInCartError,
  FileIsNotImageError,
};
