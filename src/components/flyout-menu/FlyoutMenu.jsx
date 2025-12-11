import { useState } from "react";

import MenuItems from "@/components/menu-items/MenuItems";

import "./FlyoutMenu.css";

export default function FlyoutMenu() {
  const [visibility, setVisibility] = useState(true);

  return (
    visibility && (
      <div className="flyout-menu-wrapper">
        <ul className="items-wrapper">
          {/* Need Content to inform DesktopMenu that any item is clicked (to update "Our Menu" style) */}
          <MenuItems hideMenu={() => setVisibility(false)} />
        </ul>
      </div>
    )
  );
}
