import { Route, Routes } from "react-router";
import { RootLayout } from "./layouts/root-layout";
import { LandingPage } from "./pages/landing";
import { AuthLayout } from "./layouts/auth-layout";
import AuthPage from "./pages/auth";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
