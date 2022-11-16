import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { StateContext } from "./context/StateContext";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./routes/Home";
import { Loading } from "./components";

function App() {
  const { isLoading } = useContext(StateContext);

  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
