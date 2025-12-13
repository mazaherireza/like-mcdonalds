import { useDropdownContext } from "@/contexts/dropdown";

import DesktopMenu from "@/components/desktop-menu/DesktopMenu";
import MobileMenu from "@/components/mobile-menu/MobileMenu";
import FlyoutMenu from "@/components/flyout-menu/FlyoutMenu";

import "./Header.css";

export default function Header() {
  const { shouldChange } = useDropdownContext();

  return (
    <header>
      <div className="container">
        <DesktopMenu />
        <MobileMenu />
      </div>
      {shouldChange && <FlyoutMenu />}
    </header>
  );
}
