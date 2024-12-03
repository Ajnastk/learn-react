import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
    //the props will be an object
  
    //const { resName,ratingTime ,cuisines} = props;
  
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,cuisines} = resData?.info;
    
    return (
      <div className>
         <div className=" w-[300px] border border-black rounded-xl mt-10 h-[500px] overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-500">
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


  /// higherOrder components
export const withOffers = (RestaurantCards)=>{
  return (props) =>{

    const { resData } = props;
    const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3 || {};
    
    return (
      <div className="relative mt-7 bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        {/* Render the offer label if header or subHeader exists */}
        {header || subHeader ? (
          <div className="absolute top-0 left-0 z-10 bg-yellow-500 text-white text-sm font-semibold py-3 px-3 rounded-br-lg">
            <p>
              {header} {subHeader}
            </p>
          </div>
        ) : null}

        {/* Render the wrapped component */}

        <div className="relative z-0">
        <RestaurantCards {...props} />
        </div>
        
      </div>
    );
  };
};

  export default RestaurantCards
  