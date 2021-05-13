import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./Notification";
import Cart from "./Cart";
import CartButton from "./CartButton";
import StoreContainer from "./StoreContainer";
import { sendCartData } from "../store/CartItemSlice";

let isInitial = true;

const Store = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.cart.notification);
  const showCart = useSelector((state) => state.cart.cartIsVisible);
  const showCartButton = useSelector((state) => state.cartItem.items);
  const cart = useSelector((state) => state.cartItem);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return (
    <div>
      <Notification
        status={notification.status}
        name={notification.name}
        message={notification.message}
      />
      {showCartButton.length > 0 && <CartButton />}
      {showCart && showCartButton.length > 0 && <Cart />}
      <StoreContainer />
    </div>
  );
};

export default Store;
