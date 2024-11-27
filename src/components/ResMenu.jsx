
import Shimmer from "../components/Shimmer";
import useResMenu from "../utils/useResMenu";
import { useParams } from "react-router-dom";
const ResMenu = () => {

const {id} = useParams()
  //console.log(params);

  //add a custom hook to handle fetching the menu
  const resInfo = useResMenu(id);
  
if (resInfo === null) return <Shimmer />;


  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
    deliveryTime
  } = resInfo?.cards?.[2]?.card?.card?.info || {};
  console.log("API Response:", resInfo);


  const { carousel } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card
    console.log("topPick:", carousel);
  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card
      

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
            {item.card.info.name}<span>-{'\u00A0'}{'\u00A0'}{'\u00A0'}{item.card.info.price/100 || item.card.info.defaultPrice/100
            }</span>
            </li>
        )
        )}
      </ul>
    </div> 
  );
};

export default ResMenu;
