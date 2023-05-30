import React from "react";
import { useFormik } from "formik";
import PersonalInformation from "./PersonalInformation";
const initialValues = {
  title: "",
};

const EvgcSubForm = () => {
  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit(values, formikHelpers) {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className=" w-[80%] flex justify-between min-h-[70vh] rounded-md lg:py-12 px-10">
      <div>
        <p className="text-gray-600">Personal Information</p>
      </div>
      <form onSubmit={formik.handleSubmit} action="" className="text-gray-600 bg-white p-6 w-[80%]">
        <PersonalInformation formik={formik} />
        <div className="mt-20 justify-between flex">
          <button className="bg-green-600 w-[100px] p-2 text-white rounded-[2px]">Previous</button>
          <button className="bg-green-600 w-[100px] p-2 text-white rounded-[2px]" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default EvgcSubForm;
