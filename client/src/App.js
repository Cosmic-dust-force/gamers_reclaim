import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { StateContext } from "./context/StateContext";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./routes/Home";
import { Loading } from "./components";
import Login from "./routes/auth/Login";
import Register from "./routes/auth/Register";
import UserAuthentication from "./routes/auth/UserAuthentication";

function App() {
  const { isLoading } = useContext(StateContext);

  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="/auth" element={<UserAuthentication />}>
            <Route index={true} element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
