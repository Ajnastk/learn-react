
import RestaurantCards from "./RestaurantCards";
import resList from "../utils/mockData"
const Body = () => {
    return (
      <div className="body">
        <h2 className="head2">Restaurants with online food delivery in Kozhikode
        </h2>
        <div className="cards-container">
  
  {/* passing props to a combonent and the end of the passing argument to a function */}
  
          {/* <RestaurantCards resName="KFC" ratingTime="4.6 • 30-35 mins" cuisines="Burgers, Fast Food, Rolls & Wraps Kalamassery"/>
          <RestaurantCards resName="Top Form" ratingTime="4.5 • 20-25 mins" cuisines="Indian, South Indian, Andhra, Tandoor, Snacks, Chinese, Biryani, Salads, Desserts"/> */}
  
  
  {/* //not using keys (not acceptable) <<<<<<< index as key <<<<<<<<<<< unique key */}
  
         {
          resList.map((restaurants) => (
            <RestaurantCards key={restaurants.info.id} resData = {restaurants}/>
          ))
         }
        </div>
      </div>
    );
  };

  export default Body;