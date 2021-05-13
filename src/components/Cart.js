import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItem.items);
  const cartTotal = useSelector((state) => state.cartItem.totalAmount);
  return (
    <section data-cart className='visible'>
      <div data-cart-items-wrapper className='visible mb-4 top-0 right-0 mr-4 mt-20 fixed z-50'>
        <div
          style={{ maxHeight: "calc(100vh - 6rem)" }}
          className='bg-white text-gray-700 body-font shadow-lg border rounded-lg flex flex-col'
        >
          <div data-cart-items-container className='overflow-y-auto px-4 pt-4'>
            {cartItems.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.totalPrice}
                  imageColor={item.imageColor}
                />
              );
            })}
          </div>
          <div className='flex justify-between items-end border-t p-4'>
            <span className='font-bold text-lg uppercase'>Total</span>
            <span data-cart-total className='font-bold'>
              {cartTotal}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
