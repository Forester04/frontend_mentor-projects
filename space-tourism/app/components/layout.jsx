import { Outlet } from "react-router";
import Header from "./header";
import { SpaceData } from "./contexts";
import data from "/data";
import { useContext } from "react";

export default function Layout() {
  const { destinations, crew, technology } = data;

  return (
    <SpaceData.Provider value={{ destinations, crew, technology }}>
      <main>
        <Header />
        <Outlet />
      </main>
    </SpaceData.Provider>
  );
}
