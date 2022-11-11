import { useState } from "react";
import { TextBox, PrimaryButton, ErrorMessage } from "../../components";

export default function Login() {
  const navigate = useNavigate();

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    try {

  };

  const handleNameChanged = (event) => {
    const enteredName = event.target.value;
    setName(enteredName);
  };

  const handlePasswordChanged = (event) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);
  };

  return (
    <div className="grow flex flex-col pt-12 px-6 ">
      <h2 className="pb-6 text-2xl font-semibold self-center text-gray-900 tracking-wide uppercase ">
        {"sign in"}
      </h2>

      <div className="self-center">
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleFormSubmission}
          className="flex flex-col gap-4 lg:max-w-xl grow"
        >
          <TextBox
            onChange={handleNameChanged}
            placeholder="User Name"
            required={true}
          />

          <TextBox
            onChange={handlePasswordChanged}
            type="password"
            placeholder={"Password"}
            required={true}
          />

          <PrimaryButton value={"login"} />
        </form>
      </div>

      <Link
        to="/auth/register"
        className="pt-2 uppercase self-center text-gray-800"
      >
        {"register"}
      </Link>
    </div>
  );
}
