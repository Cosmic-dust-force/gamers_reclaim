import { ordersController } from "./gamers-reclaim-api";
import { handleErrors } from "./common";

async function createOrder(token) {
  try {
    const serverResponse = await ordersController.post(
      ``,
      {},
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

export { createOrder };
