import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, CheckBox, Input } from "../../components";
import { registerUser } from "../../api/user/userAPI";
import { toast, ToastContainer } from "react-toastify";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  termsAndConditions: false,
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(
      /^[a-zA-Z\s.]+$/,
      "Only letters and the dot (.) character, followed by a space, are allowed"
    )
    .required("Required"),
  lastName: Yup.string()
    .matches(
      /^[a-zA-Z\s.]+$/,
      "Only letters and the dot (.) character, followed by a space, are allowed"
    )
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(5, "Must be 5 characters or more")
    .required("Required"),
});

const RegisterView = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      const response = await registerUser(values);
      if (response.status) {
        toast.success("Registration successful.");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col gap-4 w-1/3 max-w-md">
          <h1 className="text-4xl">CREATE AN ACCOUNT</h1>
          <Link
            to="/login"
            className="text-xl text-red-500 underline text-center"
          >
            Already have an account? Log in instead!
          </Link>
          <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
            <Input
              label="First Name"
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && formik.errors.firstName}
            />
            <Input
              label="Last Name"
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && formik.errors.lastName}
            />
            <Input
              label="Email"
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password}
            />
            <CheckBox
              label="I agree to The Nines Terms and Conditions and Privacy Policy."
              checked={formik.values.termsAndConditions}
              onChange={formik.handleChange}
              name="termsAndConditions"
            />
            <Button onClick={formik.handleSubmit}>REGISTER</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterView;
