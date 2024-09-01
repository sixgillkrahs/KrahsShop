import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components";
import { loginUser } from "../../api/user/userAPI";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginView = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const login = await loginUser(values);
        console.log(login);
        navigate("/");
      } catch (error) {
        console.error("Login error:", error);
        toast.error("Login failed. Please try again.");
      }
    },
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-4 w-1/3 max-w-md">
        <h1 className="text-4xl text-center">LOG IN TO YOUR ACCOUNT</h1>
        <Link
          to="/register"
          className="text-xl text-red-500 underline text-center"
        >
          No account? Create one here
        </Link>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <Input
            name="email"
            type="email"
            label="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
          <Input
            name="password"
            type="password"
            label="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}
          <Link
            to="/forgot-password"
            className="text-sm text-red-500 underline self-end"
          >
            Forgot your password?
          </Link>
          <button
            className="bg-black text-white p-2 rounded-none mt-4"
            type="submit"
            disabled={formik.isSubmitting}
          >
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
