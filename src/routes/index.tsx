import { Route, Routes } from "react-router-dom";
import { routesList } from "../hooks/paths";
import type { ReactNode } from "react";

const PageRoutes = () => {
  return (
    <Routes>
      {routesList.map(
        (item: { id: number; path: string; element: ReactNode }) => (
          <Route key={item.id} path={item.path} element={item.element} />
        )
      )}
    </Routes>
  );
};

export default PageRoutes;
