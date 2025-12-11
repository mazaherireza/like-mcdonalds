import { Route, Routes } from "react-router";

import RootLayout from "./layouts/RootLayout";

import Home from "@/components/home/Home";
import FullMenu from "@/components/full-menu/FullMenu";

export default function Routing() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="" element={<Home />} />
        <Route path="full-menu/:categoryId" element={<FullMenu />} />
      </Route>
    </Routes>
  );
}
