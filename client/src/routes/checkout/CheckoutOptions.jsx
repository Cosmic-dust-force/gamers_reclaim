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
      <div className="flex place-content-evenly flex-wrap">
        <LinkButton
          value={"Log in & checkout"}
          clickHandler={() => {
            navigate("/auth", { state: { navToCart: true } });
          }}
        />

        <LinkButton
          value={"Register & checkout"}
          clickHandler={() => {
            navigate("/auth/register", { state: { navToCart: true } });
          }}
        />
        <LinkButton
          value={"Checkout as guest"}
          clickHandler={() => navigate("/auth/createguest")}
        />
      </div>
    );
  }
}
