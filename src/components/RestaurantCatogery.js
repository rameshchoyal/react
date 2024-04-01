import { useState } from "react";
import CatogeryItem from "./CatogeryItems";

const RestaurantCatogery = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="bg-gray-100 mx-auto my-4  w-6/12 p-4 shadow-lg  ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title}- ({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <CatogeryItem items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCatogery;
