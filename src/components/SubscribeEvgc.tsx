import React from "react";

const SubscribeEvgc = () => {
  return (
    <div className=" bg-gradient-to-br from-green-300 via-green-600 to-green-200 flex justify-center items-center md:py-9  py-3 md:px-[36px] px-2  bg-center overflow-hidden bg-cover">
      <div className="overflow-hidden lg:px-[50px] lg:py-[116px] md:py-[50px] p-2 md:px-[20px] flex justify-between items-start flex-wrap text-white h-full w-full">
        <div className="lg:w-[40%] w-full md:mb-0 mb-12">
          <h2 className="md:text-2xl xl:text-3xl font-bold mb-[25px]">Receive the latest News</h2>
          <p>Stay up-to-date with the latest trends, news, and exclusive offers by subscribing to our newsletter. Join our community of avid readers and never miss out on the exciting content we have in store for you.</p>
        </div>
        <div className="lg:w-[55%] w-full">
          <h2 className="md:text-2xl xl:text-3xl font-bold mb-[25px]">Subscribe to our news letter</h2>
          <form action="">
            <div className="w-full bg-[#D9D9D969] flex justify-between  overflow-hidden">
              <input type="text" className="bg-inherit md:px-6 px-2 outline-none border-none w-[70%] md:text-base text-xs py-[18px] text-black" placeholder="Enter your email to subscribe" />
              <div className="bg-inherit w-[40%]">
                <button className=" py-[18px] flex justify-center items-center bg-white text-green-600  w-full text-xs h-full md:text-xl xl:text-2xl font-bold">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeEvgc;
