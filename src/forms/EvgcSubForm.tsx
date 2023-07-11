import React, { useState } from "react";
import { useFormik } from "formik";
import PersonalInformation from "./PersonalInformation";
import * as Yup from "yup";
import NextOfKin from "./evgcForms/NextOfKin";
import CurrentEmployment from "./evgcForms/CurrentEmployment";
import PaymentPlots from "./evgcForms/PaymentPlots";
import CorprateInfo from "./evgcForms/CorprateInfo";

const initialValues = {
  title: "",
  first_name: "",
  surname: "",
  other_name: "",
  residential_address: "",
  email: "",
  phone_no: "",
  date_of_birth: "",
  marital_status: "",
  nationality: "",
  full_name: "",
  nok_phone_no: "",
  nok_email: "",
  employer: "",
  position: "",
  employment_mobile: "",
  address: "",
  payment_option: "",
  no_of_plots: "",
  size_of_plot: "",
  source_of_funds: "",
  corprate_name: "",
  corprate_address: "",
  corprate_mobile_no: "",
  corprate_email: "",
  corprate_director: "",
};
const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("title"),
  first_name: Yup.string().required().label("first name"),
  surname: Yup.string().required().label("surname"),
  other_name: Yup.string(),
  residential_address: Yup.string().required().label("residential address"),
  email: Yup.string().email().required().label("email"),
  phone_no: Yup.string().required().label("phone no"),
  date_of_birth: Yup.string().required().label("dob"),
  marital_status: Yup.string().required().label("marital status"),
  nationality: Yup.string().required().label("nationality"),
  full_name: Yup.string().required().label("full name"),
  nok_phone_no: Yup.string().required().label("phone number"),
  nok_email: Yup.string().required().label("email"),
  employer: Yup.string().required().label("employer"),
  position: Yup.string().required().label("position"),
  employment_mobile: Yup.string().required().label("mobile"),
  address: Yup.string().required().label("address"),
  payment_option: Yup.string().required().label("payment option"),
  no_of_plots: Yup.number().required().label("no of plots"),
  size_of_plot: Yup.string().required().label("size of plots"),
  source_of_funds: Yup.string().required().label("size of plots"),
  corprate_name: Yup.string().required().label("size of plots"),
  corprate_address: Yup.string().required().label("size of plots"),
  corprate_mobile_no: Yup.string().required().label("size of plots"),
  corprate_email: Yup.string().required().label("size of plots"),
  corprate_director: Yup.string().required().label("size of plots"),
});

const EvgcSubForm = () => {
  const [stepper, setStepper] = useState(1);
  const stepperLength = 5;

  const formik = useFormik({
    initialValues,
    // validateOnBlur: true,
    // validateOnChange: true,
    validateOnMount: true,
    validationSchema,
    onSubmit(values, formikHelpers) {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className=" lg:w-[90%] w-full flex justify-center h-[75vh] relative rounded-md lg:py-2 ">
      <form onSubmit={formik.handleSubmit} action="" className="bg-white overflow-hidden h-full relative p-6 lg:w-[80%] w-full">
        {(() => {
          switch (stepper) {
            case 1:
              return <PersonalInformation formik={formik} />;
            case 2:
              return <NextOfKin formik={formik} />;
            case 3:
              return <CurrentEmployment formik={formik} />;
            case 4:
              return <PaymentPlots formik={formik} />;
            case 5:
              return <CorprateInfo formik={formik} />;
          }
        })()}

        <div className={`mt-20 absolute w-full px-3 bottom-4 justify-between left-0  flex`}>
          {stepper === 1 ? (
            <p>Fill in the Form </p>
          ) : (
            <button
              className={`bg-yellow-700 w-[100px] z-[300000] p-2 text-white rounded-[2px] `}
              type="button"
              onClick={() => {
                setStepper((prevState) => prevState - 1);
              }}
            >
              Previous
            </button>
          )}
          <button
            className="bg-yellow-700 w-[100px] z-[300000] p-2 text-white rounded-[2px] cursor-pointer"
            type={stepper === stepperLength ? "submit" : "button"}
            onClick={() => (stepper === stepperLength ? null : setStepper((prevState) => prevState + 1))}
            // onClick={() => setStepper((prevState) => prevState + 1)}
          >
            {stepper === stepperLength ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EvgcSubForm;
