"use client";

import AsideMenuBtn from "./AsideMenuBtn";
import { BsBook } from "react-icons/bs"; // Solo BsBook se mantiene

const AsideMenu = () => {
  return (
    <aside className="w-[100%] md:w-auto">
      <AsideMenuBtn value="Ruta de aprendizaje" icon={BsBook} fill="darkOrange" href="/dashboard" />
    </aside>
  );
};
export default AsideMenu;
