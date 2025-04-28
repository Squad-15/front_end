"use client";
import React, { useState } from "react";
import { ButtonMenuResponsive } from "../ButtonMenuResponsive";
import { HeaderAccount } from "../HeaderAccount";
import { MenuSidebarItems } from "../MenuSidebarItems";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative p-0 md:p-10">
      <div className="flex items-start">
        <MenuSidebarItems isOpen={isSidebarOpen} closeMenu={() => setIsSidebarOpen(false)} />
        <ButtonMenuResponsive openMenu={() => setIsSidebarOpen(true)} />     
        <HeaderAccount />
      </div>
    </div>
  );
};

export default SideBar;
