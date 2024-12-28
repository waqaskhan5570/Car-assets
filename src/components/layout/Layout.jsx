import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        {/* Main Section */}
        <main className="p-8 flex-1 bg-primary-light overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
