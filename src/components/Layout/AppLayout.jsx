import { Outlet } from "react-router-dom";
import Footers from "../UI/Footers.jsx";
import Headers from "../UI/Headers.jsx";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-parchment antialiased selection:bg-brass/30 selection:text-parchment">
      <Headers />
      <main className="relative flex-1">
        <Outlet />
      </main>
      <Footers />
    </div>
  );
};

export default AppLayout;
