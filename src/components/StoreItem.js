import { useDispatch } from "react-redux";
import { cartItemActions } from "../store/CartItemSlice";

const StoreItem = ({ id, name, category, priceCents: price, imageColor }) => {
  const dispatch = useDispatch();
  const addItemHandler = (e) => {
    e.preventDefault();
    dispatch(
      cartItemActions.addItemToCart({
        id,
        name,
        price,
        imageColor,
      })
    );
  };

  return (
    <div data-store-item data-item-id={id} className='lg:w-1/4 md:w-1/2 py-4 px-2 w-full'>
      <div className='block relative h-48 rounded overflow-hidden'>
        <img
          data-image
          src={`https://dummyimage.com/210x130/${imageColor}/${imageColor}`}
          alt='ecommerce'
          className='object-cover object-center w-full h-full block'
        />
      </div>
      <div className='mt-4 flex items-end justify-between'>
        <div>
          <h3
            data-category
            className='text-gray-500 text-xs tracking-widest title-font uppercase mb-1'
          >
            {category}
          </h3>
          <h2 data-name className='text-gray-900 title-font text-lg font-medium'>
            {name}
          </h2>
          <p data-price className='mt-1'>
            {price}
          </p>
        </div>
        <button
          onClick={addItemHandler}
          data-add-to-cart-button
          className='text-white py-2 px-4 text-xl bg-blue-500 rounded hover:bg-blue-700'
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default StoreItem;
