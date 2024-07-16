import { restaurantlist } from "../data";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId, areaName, discounts, slastr }) => {
  return (
    <div className="card">
      <div className="food-img">
        <img alt="Food Bowl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
        {
          discounts &&
          <div className="discount"><span>{discounts?.header}</span><span>{discounts?.subHeader}</span></div>
        }
      </div>
      <div className="food-details">
        <h3>{name}</h3>
        <div className="rating-time">
          <span className="rating">{avgRating}</span> stars - <span className="time">{slastr?.slaString} </span>
        </div>
        <div className="food-types">
          {cuisines.join(", ")}
        </div>
        <div className="location">
          {areaName}
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restraunt-list px-[100px]">
      {
        restaurantlist.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} key={restaurant.info.id}
            discounts={restaurant.info?.aggregatedDiscountInfoV3}
            slastr={restaurant.info?.sla} />
        })
      }

    </div>
  )
}
export default Body;