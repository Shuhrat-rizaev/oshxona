import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./companents/Navbar";

function App() {
  let isAuth = localStorage.getItem("isAuth");
  console.log(isAuth);

  if (!!isAuth) {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default App;
