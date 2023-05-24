import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsFillPersonFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";

interface FormProps {
  name: string;
  date: string;
  time: string;
}

const validationSchema = Yup.object().shape({});

const InspectionForm = () => {
  const formik = useFormik<FormProps>({
    initialValues: {
      name: "",
      date: "",
      time: "",
    },
    validationSchema,
    onSubmit(values) {},
  });
  const FormData = [
    { id: 1, props: "name", name: "name", label: "Name", placeholder: "Enter Full Name", icon: <BsFillPersonFill />, type: "text" },
    { id: 2, props: "date", name: "date", label: "Date", placeholder: "Choose date", icon: "", type: "date" },
    { id: 3, props: "time", name: "time", label: "Time", placeholder: "Pick time", icon: <MdAccessTimeFilled />, type: "time" },
  ];

  return (
    <div className="w-full h-full">
      <form action="" className="w-full bg-black text-white lg:py-[44px] md:py-[30px] py-[20px] lg:px-[41px] md:px-[30px] px-[18px]" onSubmit={formik.handleSubmit}>
        <p className="text-xl font-bold mb-[30px]">1 hour inspections</p>
        <div>
          {FormData.map((item, index) => {
            const { props } = item;
            return (
              <div key={index}>
                <label htmlFor={item.props} className="font-bold">
                  {item.label}
                </label>{" "}
                <br />
                <div className="w-full flex bg-white p-2 items-center justify-between mt-[14px] rounded-[2px] mb-[30px]">
                  <p className="text-[#93A0AB]">{item.icon}</p>
                  <input type={item.type} {...formik.getFieldProps(item.props)} className="w-full cursor-pointer text-[#93A0AB] ml-1 outline-none border-none py-3 text-sm" placeholder={item.placeholder} />
                  {/* {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null} */}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <button className="w-full bg-primary mb-[40px] cursor-pointer rounded-[2px] mt-[15px] py-4">Schedule</button>
        </div>
      </form>
    </div>
  );
};

export default InspectionForm;
