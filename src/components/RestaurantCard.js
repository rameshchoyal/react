import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props) =>{
    const {resData}=props;
    const {name,cloudinaryImageId,cuisines,avgRating,costForTwo ,sla} = resData?.info
     return (
         <div className="res-card">
             <img
             className="res-log"
             alt="res-logo"
             src={CDN_URL+cloudinaryImageId}
             />
             <h3>{name}</h3>
             <h4>{cuisines.join(", ")}</h4>
             <h4>{avgRating} stars</h4>
             <h4>{costForTwo}</h4>
             <h4>{sla.deliveryTime} mins</h4>
         </div>
     )
 }

 export default RestaurantCard;