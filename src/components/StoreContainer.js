import useFetch from "../hooks/useFetch";
import StoreItem from "./StoreItem";

const StoreContainer = () => {
  const URL =
    "https://react-shopping-cart-c7ef9-default-rtdb.asia-southeast1.firebasedatabase.app/store-items.json";
  const { items, isLoading, error } = useFetch(URL);

  if (isLoading) {
    return (
      <section className='text-center'>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className='text-center'>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className='text-gray-700 body-font'>
      <div className='container px-3 py-12 mx-auto'>
        <div data-store-container className='flex flex-wrap my-4 mx-2'>
          {items.map((item) => {
            return (
              <StoreItem
                key={item.id}
                id={item.id}
                name={item.name}
                category={item.category}
                priceCents={item.priceCents}
                imageColor={item.imageColor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StoreContainer;
