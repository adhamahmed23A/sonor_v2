import { Route, Routes } from "react-router";
import { RootLayout } from "./layouts/root-layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}></Route>
    </Routes>
  );
};

export default AppRouter;
