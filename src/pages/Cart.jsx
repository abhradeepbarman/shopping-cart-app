import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart} = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0) );
  }, [cart])

  return (
    <div className="px-0 md:px-12 py-8 ">
        {
          cart.length > 0 ? 
          <div className="flex flex-col-reverse md:flex-row justify-center max-w-6xl gap-x-12 mx-auto">
            <div className="w-[95%]  md:w-[60%] mx-auto">
              {
                cart.map( (item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))
              }
            </div>
              
            <div className="flex flex-col w-[100%] md:w-[40%] gap-y-10 p-5 md:p-10">
                <div className="flex flex-col">
                    <div className="uppercase text-green-700 text-xl font-semibold">your cart</div>
                    <div className="text-4xl md:text-5xl uppercase text-green-700 font-semibold">Summary</div>
                    <p className="mt-4">
                      <span className="text-xl font-semibold text-slate-700">Total Items: {cart.length}</span>
                    </p>
                  </div>

                  <div className="flex flex-col items-stretch w-full gap-y-3" >
                    <p className="text-xl text-slate-700 font-semibold">
                        Total Amount: <span className="text-black font-bold">${totalAmount}</span>  
                    </p>
                    <button className="bg-green-600 text-white font-bold text-xl py-2 px-4 w-full rounded-lg transition-all duration-300 border-2 border-green-600 hover:bg-white hover:text-green-600" >
                      Checkout now
                    </button>
                  </div>
            </div>

            <div>

            </div>
          </div> 
          : 
          <div className="flex flex-col items-center w-screen h-[80vh] justify-center gap-y-6">
              <p className="text-lg md:text-xl font-semibold text-slate-700">Your cart is empty!</p>
              <Link to="/">
                <button className="text-white bg-green-600 px-5 md:px-10 py-2 md:py-3 uppercase text-md font-semibold rounded-lg tracking-wider border-2 border-green-600 hover:bg-white hover:text-green-600 transition-all duration-300">
                  Shop now
                </button>
              </Link>
          </div>
        }
    </div>
  );
};

export default Cart;
