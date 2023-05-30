import React from "react";
import { FormikValues } from "formik";

const PersonalInformation = (formik: FormikValues) => {
  const PersonalInfo = [
    { id: 1, label: "title", props: "title", type: "text" },
    { id: 2, label: "first name", props: "", type: "text" },
    { id: 3, label: "surname", props: "", type: "text" },
    { id: 4, label: "other name", props: "", type: "text" },
    { id: 5, label: "residential address", props: "", type: "text" },
    { id: 6, label: "email address", props: "", type: "email" },
    { id: 7, label: "phone number", props: "", type: "text" },
    { id: 8, label: "date of birth", props: "", type: "date" },
    { id: 9, label: "marital status", props: "", type: "text" },
    { id: 10, label: "nationality", props: "", type: "text" },
  ];
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between">
        {PersonalInfo.map((item) => {
          return (
            <div className="md:w-[48%]" key={item.id}>
              <label className="text-gray-600 capitalize" htmlFor={item.props}>
                {item.label}
              </label>{" "}
              <br />
              <input type={item.type} name={item.props} id={item.props} className="border border-gray-300 rounded-[2px] mt-2 p-2 outline-none text-black/80 w-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalInformation;
