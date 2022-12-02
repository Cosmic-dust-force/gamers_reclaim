import { LinkButton } from "../../components";
import { useNavigate } from "react-router-dom";

export default function CheckoutOptions({ user, proccesOrderHandler }) {
  const navigate = useNavigate();

  if (user) {
    return (
      <LinkButton value={"Process Order"} clickHandler={proccesOrderHandler} />
    );
  } else {
    return (
      <div>
        {
          <LinkButton
            value={"Log in & checkout"}
            clickHandler={() => {
              navigate("/auth");
            }}
          />
          /*
        <LinkButton
          value={"Register & checkout"}
          clickHandler={() => {
            navigate("/auth/register");
          }}
        /> */
        }
        <LinkButton
          value={"Checkout as guest"}
          clickHandler={() => navigate("/auth/createguest")}
        />
      </div>
    );
  }
}
