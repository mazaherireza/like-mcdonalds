import { useDropdownContext } from "@/contexts/dropdown";

import { NavLink } from "react-router";

import { categories } from "@/components/Categories";

import "./MenuItems.css";

export default function MenuItems() {
  const { setShouldChange } = useDropdownContext();

  return (
    <>
      {categories.map((category) => {
        const { _id, img, title } = category;
        
        return (
          <li
            className="menu-items"
            key={_id}
            onClick={() => setShouldChange((prev) => !prev)}
          >
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
