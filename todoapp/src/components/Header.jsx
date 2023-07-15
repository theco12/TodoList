import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/todoapp"}>Todoapp</Link>
    </>
  );
};
export default Header;
