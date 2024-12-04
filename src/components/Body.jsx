import RestaurantCards, { withOffers } from "./RestaurantCards";
import { useEffect, useState } from "react";
//import resList from "../utils/mockData"

import ShimmerCard from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useStatus";
const Body = () => {
  const [restaurantsList, setrestaurants] = useState([]);

  //TO FILTER THE RESTAURANTS IN SEARCH TEXT FIELD TO CONTINUE SEARCHING WITHOUT REFRESHING THE PAGE
  // WE CHANGES IN THIS VARIABLE IN MAPING AND WE CALL in the  restaurantsList cards set to show in filteredRestaurants
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [heading, setHeading] = useState(
    "Restaurants with online food delivery in Kozhikode"
  );

  console.log("body rendered ", restaurantsList);

  const CardWithOffer = withOffers(RestaurantCards);

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
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setrestaurants(fetchRestaurants);
      setfilteredRestaurants(fetchRestaurants);
      // console.log(json)
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

  const LineStatus = useOnlineStatus();

  if (LineStatus === false) {
    return <h1>Looks like you're offline , please check your internet</h1>;
  }

  // if(restaurantsList.length === 0){
  //   return (<ShimmerCard/>)
  //       }

  //using ternary operator
  return restaurantsList.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">
      <div className="flex justify-between mt-8">
        <button
          className=" ml-5 mt-7 text-lg border  border-black rounded-md bg-green-400"
          onClick={() => {
            const filteredList = restaurantsList.filter(
              (res) => res.info.avgRating > 4.4
            );
            setHeading("Top Rated Restaurants in Kozhikode");
            setfilteredRestaurants(filteredList);
            console.log("button clicked");
          }}
        >
          To rated restaurants
        </button>

        <div className="flex items-center pr-7 mt-7">
          <input
            className="p-2 border border-green-600 rounded-s-lg"
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-3 py-[9px] bg-green-400 rounded-e-lg hover:bg-green-100"
            type="submit"
            onClick={() => {
              console.log(searchText);
              const searchFilter = restaurantsList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredRestaurants(searchFilter);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <h2 className="text-3xl font-mono mt-5 ml-4">{heading}</h2>
      <div className="flex flex-wrap justify-evenly">
        {/* passing props to a combonent and the end of the passing argument to a function */}

        {/* <RestaurantCards resName="KFC" ratingTime="4.6 • 30-35 mins" cuisines="Burgers, Fast Food, Rolls & Wraps Kalamassery"/>
          <RestaurantCards resName="Top Form" ratingTime="4.5 • 20-25 mins" cuisines="Indian, South Indian, Andhra, Tandoor, Snacks, Chinese, Biryani, Salads, Desserts"/> */}

        {/* //not using keys (not acceptable) <<<<<<< index as key <<<<<<<<<<< unique key */}

        {filteredRestaurants.map((restaurants) => (
          <Link
            className="no-style-link"
            key={restaurants.info.id}
            to={"/restaurants/" + restaurants.info.id}
          >
            {restaurants?.info?.aggregatedDiscountInfoV3 ? (
              <CardWithOffer resData={restaurants} />
            ) : (
              <RestaurantCards resData={restaurants} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
