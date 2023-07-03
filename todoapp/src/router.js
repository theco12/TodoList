import react from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DeepDive from "./pages/DeepDive";
import Mentor from "./pages/mentors/Mentor";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path={"/"} element={<Home />} />
          <Route path={"/deepdive"} element={<DeepDive />} />
          <Route path={"/mentor"} element={<Mentor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
