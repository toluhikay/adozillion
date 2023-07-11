import { FormikValues } from "formik";
import React from "react";

const CurrentEmployment = ({ formik }: FormikValues) => {
  const NOKInfo = [
    { id: 1, label: "employer", props: "employer", type: "text" },
    { id: 2, label: "position held", props: "position", type: "text" },
    { id: 3, label: "address", props: "address", type: "text" },
    { id: 4, label: "mobile", props: "employment_mobile", type: "text" },
  ];
  return (
    <div className="h-[90%] overflow-auto relative">
      <p className="mb-6 border-b pb-3 text-yellow-700 font-medium  lg:text-2xl md:text-xl text-lg">Current Employment Details</p>
      <div className="flex flex-wrap items-start justify-between">
        {NOKInfo.map((item) => {
          return (
            <div className="lg:w-[48%] w-full mb-3" key={item.id}>
              <label className="text-gray-600 font-medium capitalize text-sm" htmlFor={item.props}>
                {item.label}
              </label>{" "}
              <br />
              <input type={item.type} name={item.props} id={item.props} {...formik.getFieldProps(item.props)} className="border border-gray-300 rounded-[2px] mt-1 p-2 outline-none text-black/80 w-full" />
              {formik.touched[`${item.props}`] && formik.errors[`${item.props}`] ? <div className="text-[8px] text-[red]">{formik.errors[`${item.props}`]}</div> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentEmployment;
