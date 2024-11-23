import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);

const {id} = useParams()
  //console.log(params);
  
  
  // Fetch the menu data when the component mounts
  useEffect(() => {
    fetchMenu();
  }, []); // Empty dependency array ensures this runs only once

  const fetchMenu = async () => {
    try {
      const response = await fetch(
       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.24653&lng=75.82718229999999&restaurantId="+id
      );

      // Check if the response is not OK
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      //console.log(json); // Log the JSON data

      setResInfo(json);
    } catch (error) {
      console.error("Error fetching menu:", error.message); // Log the error
    }
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
    deliveryTime
  } = resInfo?.data?.cards?.[2]?.card?.card?.info || {};
  console.log("API Response:", resInfo);


  const { carousel } =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card
    console.log("topPick:", carousel);
  const { itemCards } =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card
      

  console.log("menulist:", itemCards);
  return (
    <div className="container">
      <h1>{name}</h1>

      <div className="details-menu">
        <h3>
          {avgRating} ({totalRatingsString}) - {costForTwoMessage}
        </h3>
        <h3>{cuisines.join(",")}</h3>
        <h3>Outlet {locality}</h3>
        <h3> {deliveryTime} min delivery</h3>
      </div>
      <h2>Top Picks</h2> 
      <div className="menu-img"> 
      
  {carousel?.map((topPick) => (
    <ul key={topPick?.bannerId}>
     
      <li>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" + topPick.creativeId} alt="TopPick" />
      </li>
    </ul>
  ))}
</div>
<h2>Menu List</h2>
      <ul className="menu-info">
        {itemCards?.map((item) => (
          <li className="list-menu" key={item?.card?.info?.id}>
            {item.card.info.name}<span>-{'\u00A0'} {"₹"}{'\u00A0'}{'\u00A0'}{item.card.info.price/100 || item.card.info.defaultPrice/100
            }</span>
            </li>
        )
        )}
      </ul>
    </div> 
  );
};

export default ResMenu;
