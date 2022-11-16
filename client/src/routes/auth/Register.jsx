import { Link } from "react-router-dom";
import { useState } from "react";
import { TextBox, PrimaryButton, ErrorMessage } from "../../components";
import useUsers from "../../hooks/useUsers";

export default function Register() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");

  const { register, usersError } = useUsers();

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    const user = {
      userRole: "customer",
      email: userEmail,
      password: userPassword,
      name: userName,
      address: userAddress,
      phoneNumber: userPhoneNumber,
    };
    register(user);
  };

  const handleNameChanged = (event) => {
    const enteredName = event.target.value;
    setUserName(enteredName);
  };

  const handleEmailChanged = (event) => {
    const enteredEmail = event.target.value;
    setUserEmail(enteredEmail);
  };

  const handlePasswordChanged = (event) => {
    const enteredPassword = event.target.value;
    setUserPassword(enteredPassword);
  };

  const handleAddressChanged = (event) => {
    const enteredAddress = event.target.value;
    setUserAddress(enteredAddress);
  };

  const handlePhoneNumberChanged = (event) => {
    const enteredPhoneNumber = event.target.value;
    setUserPhoneNumber(enteredPhoneNumber);
  };

  return (
    <div className="grow flex flex-col pt-12 px-6 ">
      <h2 className="pb-6 text-2xl font-semibold self-center text-gray-900 tracking-wide uppercase ">
        {"register"}
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
            onChange={handleNameChanged}
            placeholder="User Name"
            required={true}
          />

          <TextBox
            onChange={handleEmailChanged}
            placeholder="User Email"
            required={true}
          />

          <TextBox
            onChange={handlePasswordChanged}
            type="password"
            placeholder={"Password"}
            required={true}
          />

          <TextBox
            onChange={handleAddressChanged}
            placeholder={"User Address"}
            required={true}
          />

          <TextBox
            onChange={handlePhoneNumberChanged}
            type={"tel"}
            placeholder={"User Phone Number"}
            required={true}
          />

          <PrimaryButton value={"register"} />
        </form>
      </div>

      <Link to="/auth" className="pt-2 uppercase self-center text-gray-800">
        {"log in"}
      </Link>
    </div>
  );
}
