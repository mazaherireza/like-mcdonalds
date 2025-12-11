import { NavLink } from "react-router";

import { categories } from "@/components/Categories";

import "./MenuItems.css";

export default function MenuItems({ hideMenu }) {
  return (
    <>
      {categories.map((category) => {
        const { _id, img, title } = category;
        return (
          <li className="menu-items" key={_id} onClick={() => hideMenu()}>
            <NavLink to={`full-menu/${_id}`}>
              <div className="img-wrapper">
                <img src={img} />
              </div>
              <span>{title}</span>
            </NavLink>
          </li>
        );
      })}
    </>
  );
}
