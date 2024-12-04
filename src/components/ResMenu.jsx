import Shimmer from "../components/Shimmer";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";
import { useParams } from "react-router-dom";
const ResMenu = () => {
  const { id } = useParams();
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
    deliveryTime,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};
  console.log("API Response:", resInfo);

  const { carousel } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card;
  console.log("topPick:", carousel);
  
//const {itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1].card?.card
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c)=> c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
    

  return (
    <div className="main">
      <div className="container flex flex-col  mt-12 w-8/12 mx-auto">
        <h1 className="text-3xl  font-bold">{name}</h1>

        <div className="border-t-0 border-[12px] rounded-xl  border-gray-300 w-full p-5 shadow-md rounded-lg mt-6 ">
          <h3>
            {avgRating} ({totalRatingsString}) - {costForTwoMessage}
          </h3>
          <h3>{cuisines.join(",")}</h3>
          <h3>Outlet {locality}</h3>
          <h3> {deliveryTime} min delivery</h3>
        </div>
        <h2 className="text-2xl  font-bold mt-6">Top Picks</h2>
        <div className="menu-img flex flex-wrap justify-evenly mt-6">
          {carousel?.map((topPick) => (
            <ul key={topPick?.bannerId} className="mt-3 px-4 items-center">
              <li>
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" +
                    topPick.creativeId
                  }
                  alt="TopPick"
                />
              </li>
            </ul>
          ))}
        </div>
        {/* <h2 className="text-2xl  font-bold mt-6">Menu List</h2>
        <ul className="menu-info mt-5">
          {itemCards?.map((item) => (
            <li className="list-menu" key={item?.card?.info?.id}>
              {item.card.info.name}
              <span>
                -{"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </li>
          ))}
        </ul> */}
         <h2 className="text-2xl font-serif  mt-6 text-center">⇢ Menu ⇠</h2>
{categories.map((category) => (
  <ResCategory key={category?.card?.card.title} data ={category?.card?.card}/>
))}

   
      </div>
    </div>
  );
};

export default ResMenu;
