import React, { useState } from "react";
import { FormikValues } from "formik";

const PersonalInformation = ({ formik }: FormikValues) => {
  const [stepperComplete, setStepperComplete] = useState(false);
  const PersonalInfo = [
    { id: 1, label: "title", props: "title", type: "text" },
    { id: 2, label: "first name", props: "first_name", type: "text" },
    { id: 3, label: "surname", props: "surname", type: "text" },
    { id: 4, label: "other name", props: "other_name", type: "text" },
    { id: 5, label: "residential address", props: "residential_address", type: "text" },
    { id: 6, label: "email address", props: "email", type: "email" },
    { id: 7, label: "phone number", props: "phone_no", type: "text" },
    { id: 8, label: "date of birth", props: "date_of_birth", type: "date" },
    { id: 9, label: "marital status", props: "marital_status", type: "text" },
    { id: 10, label: "nationality", props: "nationality", type: "text" },
  ];
  return (
    <div className="h-[90%] overflow-auto relative">
      <p className="mb-6 border-b pb-3 text-green-700 font-medium  lg:text-2xl md:text-xl text-lg">Personal Information</p>
      <div className="flex flex-wrap items-start justify-between">
        {PersonalInfo.map((item) => {
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

export default PersonalInformation;
