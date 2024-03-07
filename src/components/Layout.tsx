import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Header />
      <div className="flex">
        <div className="w-1/5">
          <SideBar />
        </div>
        {children}
      </div>
    </section>
  );
};

export default Layout;
