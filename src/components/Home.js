import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <section className='text-gray-700 body-font'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          <div className='flex w-full mb-20 flex-wrap'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4'>
              Some Of Our Amazing Products
            </h1>
            <p className='lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit tempore nisi
              dolores ipsum veritatis, rerum excepturi numquam vitae perferendis recusandae possimus
              deserunt quas aut perspiciatis, qui architecto fuga molestias! Dolorem veritatis quasi
              cum quod deserunt sit recusandae blanditiis debitis voluptatum.
            </p>
          </div>
          <div className='flex flex-wrap md:-m-2 -m-1'>
            <div className='flex flex-wrap w-1/2'>
              <div className='md:p-2 p-1 w-1/2'>
                <img
                  alt='gallery'
                  className='w-full object-cover h-full object-center block'
                  src='https://dummyimage.com/500x300/F60/F60'
                />
              </div>
              <div className='md:p-2 p-1 w-1/2'>
                <img
                  alt='gallery'
                  className='w-full object-cover h-full object-center block'
                  src='https://dummyimage.com/500x300/FF0/FF0'
                />
              </div>
              <div className='md:p-2 p-1 w-full'>
                <img
                  alt='gallery'
                  class='w-full h-full object-cover object-center block'
                  src='https://dummyimage.com/600x360/60F/60F'
                />
              </div>
            </div>
            <div className='flex flex-wrap w-1/2'>
              <div className='md:p-2 p-1 w-full'>
                <img
                  alt='gallery'
                  className='w-full h-full object-cover object-center block'
                  src='https://dummyimage.com/600x360/00F/00F'
                />
              </div>
              <div className='md:p-2 p-1 w-1/2'>
                <img
                  alt='gallery'
                  className='w-full object-cover h-full object-center block'
                  src='https://dummyimage.com/500x300/0F0/0F0'
                />
              </div>
              <div className='md:p-2 p-1 w-1/2'>
                <img
                  alt='gallery'
                  className='w-full object-cover h-full object-center block'
                  src='https://dummyimage.com/500x300/F00/F00'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
