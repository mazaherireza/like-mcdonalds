import { useState } from "react";

import { Link } from "react-router";

import logo from "@/components/imgs/Logo_108x108.png";

import "./DesktopMenu.css";

export default function DesktopMenu({ dropdownClicked }) {
  const [visibility, setVisibility] = useState(false);

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
              <li
                className="dropdown"
                onClick={() => {
                  setVisibility((prev) => (prev = !prev));
                  dropdownClicked(!visibility);
                }}
              >
                <Link to="#" className={visibility ? "bold" : ""}>
                  Our Menu
                </Link>
                {visibility ? (
                  <i className="fa fa-chevron-up"></i>
                ) : (
                  <i className="fa fa-chevron-down"></i>
                )}
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
