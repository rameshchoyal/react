import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const CatogeryItem = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((i) => (
        <div
          key={i?.card?.info?.id}
          className="border-b-2 border-gray-200 p-4 m-4  text-left flex justify-between "
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span>{i?.card?.info?.name} </span>
              <span>
                - ₹
                {i?.card?.info?.price / 100 || i.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs ">{i?.card?.info?.description}</p>
          </div>
          <div className="w-14 h-14">
            <button
              className="absolute bg-black text-white px-1 rounded-lg mx-2 my-11 text-sm"
              onClick={() => handleAddItem(i)}
            >
              Add+
            </button>
            {i.card.info.imageId ? (
              <img
                src={CDN_URL + i?.card?.info?.imageId}
                className="w-full h-full object-cover top-0 left-0 rounded-lg"
              />
            ) : (
              <img />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatogeryItem;
