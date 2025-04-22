"use client";
import React, { useState } from "react";
import { ButtonMenuResponsive } from "../ButtonMenuResponsive";
import { HeaderAccount } from "../HeaderAccount";
import { MenuSidebarItems } from "../MenuSidebarItems";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative bg-[#f7f6f9] h-full min-h-screen">
      <div className="flex items-start">
        <MenuSidebarItems isOpen={isSidebarOpen} closeMenu={() => setIsSidebarOpen(false)} />
        <ButtonMenuResponsive openMenu={() => setIsSidebarOpen(true)} />     
        <HeaderAccount />
      </div>
    </div>
  );
};

export default SideBar;
