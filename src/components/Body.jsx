
import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import resList from "../utils/mockData"
const Body = () => {

  const [ restaurantsList, setrestaurants]= useState([]);
  const [heading, setHeading]= useState("Restaurants with online food delivery in Kozhikode");
  

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.24653&lng=75.82718229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();


    setrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(json)
  }
  

 


    return (
      <div className="body">
        
          <button className="btn-rate"  onClick={() =>{
    const filteredList = restaurantsList.filter(
      (res) => res.info.avgRating > 4.5
    );
    setHeading("Top Rated Restaurants in Kozhikode");
    setrestaurants(filteredList)
    console.log("button clicked")
   
  }}>To rated restaurants</button>
        
        <h2 className="head2">{heading}
        </h2>
        <div className="cards-container">
  
  {/* passing props to a combonent and the end of the passing argument to a function */}
  
          {/* <RestaurantCards resName="KFC" ratingTime="4.6 • 30-35 mins" cuisines="Burgers, Fast Food, Rolls & Wraps Kalamassery"/>
          <RestaurantCards resName="Top Form" ratingTime="4.5 • 20-25 mins" cuisines="Indian, South Indian, Andhra, Tandoor, Snacks, Chinese, Biryani, Salads, Desserts"/> */}
  
  
  {/* //not using keys (not acceptable) <<<<<<< index as key <<<<<<<<<<< unique key */}
  
         {
          restaurantsList.map((restaurants) => (
            <RestaurantCards key={restaurants.info.id} resData = {restaurants}/>
          ))
         }
        </div>
      </div>
    );
  };

  export default Body;