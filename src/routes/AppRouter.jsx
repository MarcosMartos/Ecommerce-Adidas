import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./routes";
import DashboardComponent from "../components/pages/dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import { useEffect } from "react";

const AppRouter = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route
          key="dashboard"
          path="/dashboard"
          element={<DashboardComponent />}
        />
      </Route>

      <Route path="*" element={<h1>404 not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
