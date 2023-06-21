import { FormikValues } from "formik";
import React from "react";
import { getTextFieldFormikProps } from "../../utils";

const PaymentPlots = ({ formik }: FormikValues) => {
  const NOKInfo = [
    {
      id: 1,
      label: "payment option",
      props: "payment_option",
      selectOptions: [
        { id: 1, option: "", label: "Select payment plan" },
        { id: 1, option: "outright", label: "0-3 months" },
        { id: 1, option: "6 months", label: "+N250,000" },
        { id: 1, option: "outright", label: "+550,000" },
      ],
    },
    { id: 2, label: "number of plots", props: "no_of_plots", type: "number" },
    {
      id: 3,
      label: "size of plot",
      props: "size_of_plot",
      selectOptions: [
        { id: 1, option: "", label: "Select plot size" },
        { id: 1, option: "300sqm", label: "300sqm" },
        { id: 1, option: "500sqm", label: "500sqm" },
      ],
    },
    {
      id: 4,
      label: "source of funds",
      props: "source_of_funds",
      selectOptions: [
        { id: 1, option: "", label: "Select source of funds" },
        { id: 1, option: "salaries and allowance", label: "salaries & allowance" },
        { id: 1, option: "savings", label: "savings" },
        { id: 1, option: "loan", label: "loan" },
        { id: 1, option: "corperate contribution", label: "corperate contribution" },
        { id: 1, option: "personal income", label: "personal income" },
        { id: 1, option: "sales of personal properties", label: "sales of personal properties" },
        { id: 1, option: "business income", label: "business income" },
      ],
    },
  ];
  return (
    <div className="h-[90%] overflow-auto relative">
      <p className="mb-6 border-b pb-3 text-green-700 font-medium  lg:text-2xl md:text-xl text-lg">Payment Option and Plot Size</p>
      <div className="flex flex-wrap items-start justify-between">
        {NOKInfo.map((item) => {
          return (
            <div className="lg:w-[48%] w-full mb-3" key={item.id}>
              <label className="text-gray-600 font-medium capitalize text-sm" htmlFor={item.props}>
                {item.label}
              </label>{" "}
              <br />
              {item.selectOptions ? (
                <select name={item.props} {...formik.getFieldProps(item.props)} className="border border-gray-300 capitalize rounded-[2px] mt-1 p-2 outline-none text-black/80 w-full">
                  {item.selectOptions.map((opt, ind) => {
                    return (
                      <option value={opt.option} key={ind}>
                        {opt.label}
                      </option>
                    );
                  })}
                </select>
              ) : (
                <input type={item.type} name={item.props} id={item.props} {...formik.getFieldProps(item.props)} className="border border-gray-300 rounded-[2px] mt-1 p-2 outline-none text-black/80 w-full" />
              )}
              {formik.touched[`${item.props}`] && formik.errors[`${item.props}`] ? <div className="text-[8px] text-[red]">{formik.errors[`${item.props}`]}</div> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentPlots;
