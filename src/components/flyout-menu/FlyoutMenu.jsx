import MenuItems from "@/components/menu-items/MenuItems";

import "./FlyoutMenu.css";

export default function FlyoutMenu() {
  return (
    <div className="flyout-menu-wrapper">
      <ul className="items-wrapper">
        <MenuItems />
      </ul>
    </div>
  );
}
