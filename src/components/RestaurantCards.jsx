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
            src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
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
  