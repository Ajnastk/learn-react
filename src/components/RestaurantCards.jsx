import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
    //the props will be an object
  
    //const { resName,ratingTime ,cuisines} = props;
  
    const {resData} = props;
  
    
    const {cloudinaryImageId,name,avgRating,cuisines} = resData?.info;
    return (
      <div className="card">
        <div className="c-img">
          <img
            className="c-image"
            src= {CDN_URL + cloudinaryImageId}
            alt=" Restaurant"
          />
        </div>
        <div className="c-info">
          <h3>{name}</h3>
          <h4>
            <i className="fa-solid fa-star"></i>{avgRating}
          </h4>
          <p>{cuisines.join(", ")}</p>
        </div>
      </div>
    );
  };

  export default RestaurantCards
  