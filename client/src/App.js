import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./routes/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
