import { useState } from "react";

import DesktopMenu from "@/components/desktop-menu/DesktopMenu";
import MobileMenu from "@/components/mobile-menu/MobileMenu";
import FlyoutMenu from "@/components/flyout-menu/FlyoutMenu";

import "./Header.css";

export default function Header() {
  const [visibility, setVisibility] = useState(false);

  return (
    <header>
      <div className="container">
        <DesktopMenu
          dropdownClicked={(flag) => {
            setVisibility(flag);
          }}
        />
        <MobileMenu />
      </div>
      {visibility && <FlyoutMenu />}
    </header>
  );
}
