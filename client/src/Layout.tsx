import Confessions from "./components/ Confessions";
import { Misdemeanour } from "./components/Misdemeanour";
import { NotFound } from "./components/Not_Found";
import Home from "./components/home";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

export const Layout: React.FC = () => (
  <>
    <ul>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/misdemeanour">Misdemeanour</NavLink>
      </li>
      <li>
        <NavLink to="confessions">Confess To Us</NavLink>
      </li>
    </ul>
    <Routes>
      <Route path="/">
        <Route path="home" element={<Home />} />
        <Route path="confessions" element={<Confessions />} />
        <Route path="misdemeanour" element={<Misdemeanour />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
);
