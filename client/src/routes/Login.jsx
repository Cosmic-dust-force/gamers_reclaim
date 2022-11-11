import { Link } from 'react-router-dom';
import { useState } from "react";
import { TextBox, PrimaryButton, ErrorMessage } from "../components";
import useUsers from '../hooks/useUsers';

export default function Login() {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  
  const { login, usersError } = useUsers();

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    login(userEmail, userPassword);
  };

  const handleEmailChanged = (event) => {
    const enteredEmail = event.target.value;
    setUserEmail(enteredEmail);
  };

  const handlePasswordChanged = (event) => {
    const enteredPassword = event.target.value;
    setUserPassword(enteredPassword);
  };

  return (
    <div className="grow flex flex-col pt-12 px-6 ">
      <h2 className="pb-6 text-2xl font-semibold self-center text-gray-900 tracking-wide uppercase ">
        {"sign in"}
      </h2>

      <div className="self-center">
        {usersError && <ErrorMessage message={usersError} />}
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleFormSubmission}
          className="flex flex-col gap-4 lg:max-w-xl grow"
        >
          <TextBox
            onChange={handleEmailChanged}
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
