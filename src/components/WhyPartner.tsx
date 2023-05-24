import React from "react";
import MarkPng from "../assets/images/MarkPng.png";

const WhyPartner = () => {
  const WhyPartnerData = [
    { id: 1, lable: "INCREDIBLE OFFER", content: "Treasury Bills are currently at an all time low of 3.8% and the uncertainty of the stock market;The Alpha Tribe Funds is offering up to 25% ROI in 12Months." },
    {
      id: 2,
      lable: "SECURITY",
      content:
        "Treasury Bills are currently at an all time low of 3.8% and the uncertainty of the stock market;The Alpha Tribe Funds is offering up to 25% ROI in 12Months.Treasury Bills are currently at an all time low of 3.8% and the uncertainty of the stock market;The Alpha Tribe Funds is offering up to 25% ROI in 12Months.Treasury Bills are currently at an all time low of 3.8% and the uncertainty of the stock market;The Alpha Tribe Funds is offering up to 25%",
    },
    { id: 3, lable: "MULTIPLE EARNINGS", content: "Treasury Bills are currently at an all time low of 3.8% and the uncertainty of the stock market;The Alpha Tribe Funds is offering up to 25% ROI in 12Months." },
  ];

  return (
    <div className=" bg-gradient-to-tr from-yellow-300 via-primary to-yellow-200 lg:my-32 md:my-24 my-16 lg:px-[89px] px-[30px] lg:py-[100px] md:px-[70px] py-[50px]">
      <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">Why Partner With Us?</h2>
      <div className="w-full flex flex-col justify-center items-center py-12">
        {WhyPartnerData.map((item, index) => {
          return (
            <div className="md:w-[70%] w-full mb-[70px]" key={index}>
              <div className="flex items-center mb-3">
                <p className="font-bold mr-3">{item.lable}</p>
                <img src={MarkPng} className="md:w-[49px] md:h-[43px] w-[30px] h-[25px]" alt="" />
              </div>
              <p className="font-light">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyPartner;
