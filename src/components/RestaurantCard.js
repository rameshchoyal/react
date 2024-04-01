import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const RestaurantCard = (props) => {
  const { loginUser } = useContext(userContext);
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg h-96  hover:bg-gray-200">
      <div className="w-[218px] h-[156px] ">
        <img
          className="w-full h-full object-cover top-0 left-0 rounded-lg pb-4"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>User: {loginUser}</h4>
    </div>
  );
};

// Higher order component
//  Input -> RestauranCard => RestaurantCardPromoted
export const withRatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black  text-white m-2 rounded-lg p-1 font-serif">
          High rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
