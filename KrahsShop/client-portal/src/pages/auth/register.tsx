import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, CheckBox, Input, RadioButton } from "../../components";
import { registerUser } from "../../api/user/userAPI";
import { toast, ToastContainer } from "react-toastify";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  termsAndConditions: false,
  sex: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(5, "Must be 5 characters or more")
    .required("Required"),
  sex: Yup.string().required("Required"),
});

const RegisterView = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values: typeof initialValues) => {
    if (values.termsAndConditions === false) {
      toast("You must agree to the terms and conditions.");
      return;
    }
    const request = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      sex: values.sex,
      role: 0,
    };
    try {
      const response = await registerUser(request);
      console.log(response);
      if (response.code === 409) {
        toast(response.message);
        return;
      } else {
        toast(response.message);
        navigate("/login");
        return;
      }
    } catch (error) {
      toast("Registration failed. Please try again.");
      return;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen flex-col pt-20">
      <ToastContainer />
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          CREATE AN ACCOUNT
        </h1>
        <Link
          to="/login"
          className="block text-lg text-red-500 underline text-center mb-6"
        >
          Already have an account? Log in instead!
        </Link>
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <div>
            <h2 className="text-lg font-medium mb-2">Social title</h2>
            <div className="flex space-x-4">
              <RadioButton
                name="sex"
                value="Mr."
                label="Mr."
                checked={formik.values.sex === "Mr."}
                onChange={formik.handleChange}
              />
              <RadioButton
                name="sex"
                value="Ms."
                label="Ms."
                checked={formik.values.sex === "Ms."}
                onChange={formik.handleChange}
              />
              <RadioButton
                name="sex"
                value="Miss"
                label="Miss"
                checked={formik.values.sex === "Miss"}
                onChange={formik.handleChange}
              />
            </div>
          </div>
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
  );
};

export default RegisterView;
