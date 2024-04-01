import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatogery from "./RestaurantCatogery";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, city } =
    resInfo?.cards[2]?.card?.card?.info;

  const restaurantCatogery =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        (c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") &&
        c.card?.card?.itemCards
    );

  return (
    <div className="text-center">
      <h1 className="font-bold m-5 text-xl">{name}</h1>
      <p className="font-bold m-2 text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {restaurantCatogery.map((category) => (
        <RestaurantCatogery
          key={category?.card?.card?.title}
          data={category?.card.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
