import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body =() => {
    const[restaurantList,setRestaurantList]=useState(resList);


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=> {
                   setRestaurantList(resList.filter(
                    (restaurant) =>restaurant.info.avgRating >4.2));
                }}>Top rated restaurant</button>
            </div>
            <div className="res-container">
               { restaurantList.map((restaurant) => (
                 <RestaurantCard key={restaurant.info.id} resData={restaurant} />
               ))}
            </div>
        </div>
    )

}

export default Body;