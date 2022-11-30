import { useState } from "react";
import { TextBox, PrimaryButton, ErrorMessage } from "../../components";
import useUsers from "../../hooks/useUsers";

export default function CreateGuest() {
  const [guestEmail, setGuestEmail] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestAddress, setGuestAddress] = useState("");
  const [guestPhoneNumber, setGuestPhoneNumber] = useState("");

  const { register, usersError } = useUsers();

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    const guest = {
      userRole: "guest",
      email: guestEmail,
      name: guestName,
      address: guestAddress,
      phoneNumber: guestPhoneNumber,
    };
    register(guest);
  };

  const handleNameChanged = (event) => {
    const enteredName = event.target.value;
    setGuestName(enteredName);
  };

  const handleEmailChanged = (event) => {
    const enteredEmail = event.target.value;
    setGuestEmail(enteredEmail);
  };

  const handleAddressChanged = (event) => {
    const enteredAddress = event.target.value;
    setGuestAddress(enteredAddress);
  };

  const handlePhoneNumberChanged = (event) => {
    const enteredPhoneNumber = event.target.value;
    setGuestPhoneNumber(enteredPhoneNumber);
  };

  return (
    <div className="grow flex flex-col pt-12 px-6 ">
      <h2 className="pb-6 text-2xl font-semibold self-center text-gray-900 tracking-wide uppercase ">
        {"enter your information"}
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
            placeholder="Guest Name"
            required={true}
          />

          <TextBox
            onChange={handleEmailChanged}
            placeholder="Guest Email"
            required={true}
          />

          <TextBox
            onChange={handleAddressChanged}
            placeholder={"Guest Address"}
            required={true}
          />

          <TextBox
            onChange={handlePhoneNumberChanged}
            type={"tel"}
            placeholder={"Guest Phone Number"}
            required={true}
          />

          <PrimaryButton value={"submit information"} />
        </form>
      </div>
    </div>
  );
}
