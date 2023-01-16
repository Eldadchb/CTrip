import Map from "../components/map";
import NavBar from "../components/nav-bar";
import { useContext } from "react";
import UserDataContext from "../usersData/userContext";

function RoutePage() {
  const userDataTemp = useContext(UserDataContext);
  console.log(userDataTemp);

  return (
    <>
      <div className="container">
        hi
      </div>
    </>
  );
}

export default RoutePage;
