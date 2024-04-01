import RestaurantCard, { withRatedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, SetSearchText] = useState(" ");

  const RestaurantPromated = withRatedLabel(RestaurantCard);

  const { loginUser, setUserName } = useContext(userContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const Json = await data.json();

    setRestaurantList(
      Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 ">
          <input
            type="text"
            className="border border-solid border-black rounded-md"
            value={searchText}
            onChange={(e) => {
              SetSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-100 mx-4 px-4 py-2 rounded-lg"
            onClick={() => {
              console.log(searchText);
              setFilteredRestaurant(
                restaurantList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4">
          <button
            className="bg-blue-100 rounded-lg flex items-center mx-4 px-4 py-2"
            onClick={() => {
              setFilteredRestaurant(
                restaurantList.filter(
                  (restaurant) => restaurant.info.avgRating > 4.2
                )
              );
            }}
          >
            Top rated restaurant
          </button>
        </div>
        <div className=" flex items-center">
          <label> UserName: </label>
          <input
            className="border border-solid border-black rounded-md p-2"
            value={loginUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            className="no-underline"
          >
            {restaurant.info.avgRating > 4 ? (
              <RestaurantPromated resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
