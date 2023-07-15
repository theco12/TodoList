import react from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todoapp from "./pages/Todoapp/Todoapp";

const RouterFile = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path={"/"} element={<Home />} />
          <Route path={"/todoapp"} element={<Todoapp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterFile;
