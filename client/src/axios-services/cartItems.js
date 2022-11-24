import { cartItemsController } from "./gamers-reclaim-api";
import { handleErrors } from "./common";

async function addItemToCart(token, cartItem) {
  try {
    const serverResponse = await cartItemsController.post(``, cartItem, {
      headers: { authorization: `Bearer  ${token}` },
    });

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

async function getInCartForUser(token, userId) {
  try {
    const serverResponse = await cartItemsController.get(`/${userId}`, {
      headers: { authorization: `Bearer  ${token}` },
    });

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

export { addItemToCart, getInCartForUser };
