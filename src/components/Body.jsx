import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
//import resList from "../utils/mockData"
import ShimmerCard from "./Shimmer";
const Body = () => {
  const [restaurantsList, setrestaurants] = useState([]);

  //TO FILTER THE RESTAURANTS IN SEARCH TEXT FIELD TO CONTINUE SEARCHING WITHOUT REFRESHING THE PAGE 
  // WE CHANGES IN THIS VARIABLE IN MAPING AND WE CALL in the  restaurantsList cards set to show in filteredRestaurants
  const [filteredRestaurants,setfilteredRestaurants] = useState([])
  const [searchText,setsearchText] = useState("")
  const [heading, setHeading] = useState(
    "Restaurants with online food delivery in Kozhikode"
  );
  

console.log("body rendered ");



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.24653&lng=75.82718229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const fetchRestaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setrestaurants(fetchRestaurants);
      setfilteredRestaurants(fetchRestaurants);
      // console.log(json)
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };
  // if(restaurantsList.length === 0){
  //   return (<ShimmerCard/>)
  //       }

  //using ternary operator
  return restaurantsList.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">

      <div className="filter">
     
        <button
        className="btn-rate"
        onClick={() => {
          const filteredList = restaurantsList.filter(
            (res) => res.info.avgRating >= 4.5
          );
          setHeading("Top Rated Restaurants in Kozhikode");
          setrestaurants(filteredList);
          console.log("button clicked");
        }}
      >
        To rated restaurants
      </button>

      <div className="search-container">
          <input type="text"
           value={searchText} 
          
          onChange={(e)=>{
            setsearchText(e.target.value); 
          
          }}
          />
          <button  type="submit"
          onClick={()=>{
            console.log(searchText);
        const searchFilter= restaurantsList.filter((res)=>{
        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
       }) 
       setfilteredRestaurants(searchFilter);
          }}
          
          >Search</button>
        </div>
    
</div>
      
      <h2 className="head2">{heading}</h2>
      <div className="cards-container">
        {/* passing props to a combonent and the end of the passing argument to a function */}

        {/* <RestaurantCards resName="KFC" ratingTime="4.6 • 30-35 mins" cuisines="Burgers, Fast Food, Rolls & Wraps Kalamassery"/>
          <RestaurantCards resName="Top Form" ratingTime="4.5 • 20-25 mins" cuisines="Indian, South Indian, Andhra, Tandoor, Snacks, Chinese, Biryani, Salads, Desserts"/> */}

        {/* //not using keys (not acceptable) <<<<<<< index as key <<<<<<<<<<< unique key */}

        {filteredRestaurants.map((restaurants) => (
          <RestaurantCards key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
