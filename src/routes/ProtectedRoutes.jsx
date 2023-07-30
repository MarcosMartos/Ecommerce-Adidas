import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let userRol = "user";

  return <div>{userRol !== "admin" ? <Navigate to={"/"} /> : <Outlet />}</div>;
};

export default ProtectedRoutes;
