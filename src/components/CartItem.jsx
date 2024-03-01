import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {remove} from "../redux/Slices/CartSlice"
import toast from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {

  const {cart} = useSelector((state) => state);

  const dispatch = useDispatch();

  function deleteItem() {
    dispatch(remove(item.id))
    toast.error("Item removed from cart!")
  }

  return (
    <div className={`flex flex-col md:flex-row gap-x-12 py-5 md:py-10 px-3 w-full items-center gap-y-5 md:gap-y-0
    ${ (cart.length != 1 && itemIndex != cart.length-1) && "border-b-2 border-black" } `}>

      <div className="w-[30%]">
          <img src={item.image} className="object-cover" />
      </div>

      <div className="flex flex-col gap-y-6 justify-between w-[100%] md:w-[70%]">
        <h1 className="text-slate-700 text-xl font-semibold">{item.title}</h1>
        <p className="text-gray-700">
          {
            item.description.split(" ").splice(0, 15).join(" ") + "..."
          }
        </p>
        <div className="flex justify-between items-center">
          <p className="text-green-600 font-bold text-lg">${item.price}</p>
          <div on onClick={deleteItem} className="bg-red-200 rounded-full flex justify-center items-center">
              <MdDelete fontSize={40} className="text-red-800 p-3 cursor-pointer" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
