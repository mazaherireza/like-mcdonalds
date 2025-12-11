import { useState } from "react";

import { Link } from "react-router";

import logo from "@/components/imgs/Logo_108x108.png";
import MenuItems from "@/components/menu-items/MenuItems";

import "./MobileMenu.css";

export default function MobileMenu() {
  const [megaMenuVisibility, setMegaMenuVisibility] = useState(false);
  const [detailedVisibility, setDetailedVisibility] = useState(false);

  return (
    <div className="mobile-menu">
      <div className="mobile-header">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <i
            className="fa fa-bars fa-2x hamburger-icon"
            onClick={() => setMegaMenuVisibility(true)}
          ></i>
        </div>
        <button id="button-ordernow">Order Now</button>
      </div>

      <div
        className={
          megaMenuVisibility ? "mobile-content show" : "mobile-content"
        }
      >
        <div className="content-header">
          <img src={logo} alt="Logo" />
          <i
            className="fa fa-close"
            onClick={() => setMegaMenuVisibility(false)}
          ></i>
        </div>

        <div className="links">
          <div className="secondary-links">
            <ul>
              <li className="dropdown">
                <Link to="#">Language</Link>
                <i className="fa fa-plus"></i>
              </li>
              <li>
                <Link to="#">Sign Up For Email</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="primary-links">
            <nav>
              <ul>
                <li className="dropdown">
                  <Link to="#">Our Menu</Link>
                  {detailedVisibility ? (
                    <i
                      className="fa fa-minus"
                      onClick={() => setDetailedVisibility(false)}
                    ></i>
                  ) : (
                    <i
                      className="fa fa-plus"
                      onClick={() => setDetailedVisibility(true)}
                    ></i>
                  )}
                </li>
                {detailedVisibility && (
                  <li>
                    <ul>
                      <MenuItems
                        hideMenu={() => {
                          setDetailedVisibility(false);
                          setMegaMenuVisibility(false);
                        }}
                      />
                    </ul>
                  </li>
                )}
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
    </div>
  );
}
