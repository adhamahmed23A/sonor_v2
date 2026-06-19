import { Outlet } from "react-router";
import Header from "../components/header";

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
