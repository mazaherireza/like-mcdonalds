import { useDropdownContext } from "@/contexts/dropdown";

import { Link } from "react-router";

import logo from "@/components/imgs/Logo_108x108.png";

import "./DesktopMenu.css";

export default function DesktopMenu() {
  const { shouldChange, setShouldChange } = useDropdownContext();

  const clickHandler = (e) => {
    e.preventDefault();

    setShouldChange((prev) => !prev);
    const flag = !shouldChange;
  };

  return (
    <div className="desktop-menu">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="links">
        <div className="secondary-links">
          <ul>
            <li>
              <Link to="#">Sign Up For Email</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
          </ul>
          <button id="button-ordernow">Order Now</button>
        </div>

        <div className="primary-links">
          <nav>
            <ul>
              <li className="dropdown">
                <button
                  onClick={clickHandler}
                  className={shouldChange ? "bold" : ""}
                >
                  Our Menu
                  {shouldChange ? (
                    <i className="fa fa-chevron-up"></i>
                  ) : (
                    <i className="fa fa-chevron-down"></i>
                  )}
                </button>
              </li>
              <li>
                <Link to="#">Download App</Link>
              </li>
              <li>
                <Link to="#">MyMcDonald's Rewards</Link>
              </li>
              <li>
                <Link to="#">About Our Food</Link>
              </li>
              <li>
                <Link to="#">
                  McDelivery<sup>&reg;</sup>
                </Link>
              </li>
              <li>
                <Link to="#">Gift Cards</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
