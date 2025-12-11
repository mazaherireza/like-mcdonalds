import img from "./MealDeal.png";

import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="home-wrapper">
        <div className="img-wrapper">
          <img src={img} />
        </div>

        <div className="content">
          <h2>The Meal Deal gets you how much?!</h2>
          <p>
            A 4 piece McNuggets®, small fries and soft drink, plus a McChicken®
            or McDouble® starts at $5. You already know the name, now get yours
            in the app before it’s gone.
          </p>

          <button>Get the Meal in the App</button>
        </div>
      </div>
    </div>
  );
}
