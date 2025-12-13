import { useDropdownContext } from "@/contexts/dropdown";

import { NavLink } from "react-router";

import { categories } from "@/components/Categories";

import "./MenuItems.css";

export default function MenuItems({ hideMenu }) {
  const { setShouldChange } = useDropdownContext();

  const handleClick = () => {
    if (hideMenu) {
      hideMenu();
    } else {
      setShouldChange((prev) => !prev);
    }
  };

  return (
    <>
      {categories.map((category) => {
        const { _id, img, title } = category;

        return (
          <li className="menu-items" key={_id} onClick={handleClick}>
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
