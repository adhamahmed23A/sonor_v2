import { Route, Routes } from "react-router";
import { RootLayout } from "./layouts/root-layout";
import { LandingPage } from "./pages/landing";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
