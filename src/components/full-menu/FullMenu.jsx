import { useParams } from "react-router";

import { categories } from "@/components/Categories";

import { foods as foodList } from "@/components/Foods";

import "./FullMenu.css";

export default function ShowFood() {
  const { categoryId } = useParams();

  const category = categories.find((category) => category._id === categoryId);
  const foods = foodList.filter((food) => food.categoryId === categoryId);

  return (
    <div className="container">
      <div className="full-menu-wrapper">
        <h4>{category.title}</h4>
        <div className="content">
          {foods.map((food) => {
            const { _id, img, title } = food;
            
            return (
              <div key={_id} className="food-wrapper">
                <div className="img-wrapper">
                  <img src={img} alt={title} />
                </div>
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
