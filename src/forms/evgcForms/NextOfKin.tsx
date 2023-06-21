import { FormikValues } from "formik";
import React from "react";

const NextOfKin = ({ formik }: FormikValues) => {
  const NOKInfo = [
    { id: 1, label: "full name", props: "full_name", type: "text" },
    { id: 2, label: "phone number", props: "nok_phone_no", type: "text" },
    { id: 3, label: "email", props: "nok_email", type: "email" },
  ];
  return (
    <div className="h-[90%] overflow-auto relative">
      <p className="mb-6 border-b pb-3 text-green-700 font-medium  lg:text-2xl md:text-xl text-lg">Next of Kin Information</p>
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

export default NextOfKin;
