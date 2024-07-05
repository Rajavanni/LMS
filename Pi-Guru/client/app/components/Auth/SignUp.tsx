import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye } from "react-icons/ai";
import { styles } from "../../../app/styles/style";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
 
type Props = {
  setRoute: (route: string) => void;
};
 
const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});
 
const Signup: FC<Props> = ({ setRoute }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false); // Define loading state
  const [register, { data, error, isSuccess }] = useRegisterMutation();
 
  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Registration successful";
      toast.success(message);
      setRoute("Verification");
      setLoading(false); // Set loading to false after successful registration
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
      setLoading(false); // Set loading to false after encountering an error
    }
  }, [isSuccess, error]);
 
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      setLoading(true); // Set loading to true when submitting the form
      const data = {
        name,
        email,
        password,
      };
      await register(data);
    },
  });
 
  const { errors, touched, values, handleChange, handleSubmit } = formik;
 
  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>Join to Pi-Guru</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-3">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your Name
          </label>
          <input
            type="text"
            name=""
            value={values.name}
            onChange={handleChange}
            id="name"
            placeholder="johndoe"
            className={`${errors.name && touched.name && "border-red-500"} ${styles.input
              }`}
          />
          {errors.name && touched.name && (
            <span className="text-red-500 pt-2 block">{errors.name}</span>
          )}
        </div>
 
        {/* Email Field */}
        <label className={`${styles.label}`} htmlFor="email">
          Enter your Email
        </label>
        <input
          type="email"
          name=""
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="loginmail@gmail.com"
          className={`${errors.email && touched.email && "border-red-500"} ${styles.input
            }`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}
 
        {/* Password Field */}
        <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="password">
            Enter your password
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="password!@%"
            className={`${errors.password && touched.password && "border-red-500"
              } ${styles.input}`}
          />
          {/*<AiOutlineEye
            className="absolute bottom-3 right-2 z-1 cursor-pointer"
            size={20}
            onClick={() => setShow(!show)}
          />*/}
        </div>
 
        {errors.password && touched.password && (
          <span className="text-red-500 pt-2 block">{errors.password}</span>
        )}
 
        {/* Sign Up Button */}
        <div className="w-full mt-5">
          {/* Conditionally render loading animation */}
          {loading ? ( // Show loading animation if loading is true
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 text-black dark:text-white "></div>
            </div>
          ) : ( // Show sign-up button if loading is false
            <input
              type="submit"
              value="Sign Up"
              className={`${styles.button}`}
            />
          )}
        </div>
 
        {/* Already have an account? */}
        <h5 className="text-center pt-4 font-Poppins text-black dark:text-white text-[14px]">
          Already have an account?{" "}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Login")}
          >
            Sign in
          </span>
        </h5>
      </form>
      <br />
    </div>
  );
};
 
export default Signup;