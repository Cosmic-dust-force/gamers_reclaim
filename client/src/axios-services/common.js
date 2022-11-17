export function handleErrors(error) {
  if (error.response) {
    const { data: apiError } = error.response;
    console.error("response: ", error.response.data);

    throw new Error(apiError.message);
  } else {
    throw new Error("An unexpected error occurred while making your request.");
  }
}
