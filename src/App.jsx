import { Navigate, Outlet } from "react-router-dom";

function App() {
  let isAuth = localStorage.getItem("isAuth");
  console.log(isAuth);

  if (!!isAuth) {
    return (
      <div>
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default App;
