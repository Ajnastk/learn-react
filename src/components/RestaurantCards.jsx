import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
    //the props will be an object
  
    //const { resName,ratingTime ,cuisines} = props;
  
    const {resData} = props;
  
    
    const {cloudinaryImageId,name,avgRating,cuisines} = resData?.info;
    return (
      <div className>
         <div className=" w-[300px] border border-black rounded-xl mt-5 h-[500px] overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-500">
        <div className="c-img">
          <img
            className="w-[100%] h-[300px]"
            src= {CDN_URL + cloudinaryImageId}
            alt=" Restaurant"
          />
        </div>
        <div className="p-3">
          <h3 className="mt-5 text-lg font-bold ">{name}</h3>
          <h4 className="mt-6">
            <i className="fa-solid fa-star"></i>{avgRating}
          </h4>
          <p className="mt-3">{cuisines.join(", ")}</p>
        </div>
      </div>
      </div>
     
    );
  };

  export default RestaurantCards
  