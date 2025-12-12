import { DropdownProvider } from "@/contexts/dropdown";

import { Outlet } from "react-router";

import Header from "@/components/header/Header";

export default function RootLayout() {
  return (
    <>
      <DropdownProvider>
        <Header />
      </DropdownProvider>
      <Outlet />
    </>
  );
}
