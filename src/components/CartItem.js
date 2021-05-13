import { useDispatch } from "react-redux";
import { cartItemActions } from "../store/CartItemSlice";

const CartItem = ({ name, id, quantity, price, imageColor }) => {
  const dispatch = useDispatch();

  const addItemHandler = (e) => {
    e.preventDefault();
    dispatch(
      cartItemActions.addItemToCart({
        name,
        id,
        quantity,
        price,
      })
    );
  };

  const removeItemHandler = (e) => {
    e.preventDefault();
    dispatch(cartItemActions.removeItemFromCart(id));
  };

  const removeItemTotalHandler = (e) => {
    e.preventDefault();
    dispatch(cartItemActions.removeItemFromCartTotal(id));
  };
  return (
    <div data-item className='mb-6'>
      <div className='block relative h-24 rounded overflow-hidden'>
        <img
          src={`https://dummyimage.com/210x130/${imageColor}/${imageColor}`}
          data-image
          alt='ecommerce'
          className='object-cover object-center w-full h-full block rounded'
        />
        <button
          onClick={removeItemTotalHandler}
          data-remove-cart-button
          className='absolute top-0 right-0 bg-black rounded-tr text-white w-6 h-6 text-lg flex justify-center items-center'
        >
          &times;
        </button>
      </div>
      <div className='mt-2 flex justify-between'>
        <div className='flex items-center title-font gap-2'>
          <h2 data-name className='text-gray-900 text-lg font-medium'>
            {name}
          </h2>
          <span data-quantity className='text-gray-600 text-sm font-bold ml-1'>
            {`x${quantity}`}
          </span>
          <button onClick={addItemHandler} className='bg-gray-200'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <button onClick={removeItemHandler} className='bg-gray-200'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <div data-price>{price}</div>
      </div>
    </div>
  );
};

export default CartItem;
