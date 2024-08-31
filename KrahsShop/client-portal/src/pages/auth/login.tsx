import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components";
import { loginUser } from "../../api/user/userAPI";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = { email, password };
    const response = await loginUser(user);
    console.log(response);
  };
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
        <div className="flex flex-col gap-4 w-full">
          <Input label="Email" type="email" />
          <Input
            label="Password"
            type="password"
            description="At least 5 characters long"
          />
        </div>
        <Link
          to="/register"
          className="text-xl text-red-500 underline text-center"
        >
          Forgot your password?
        </Link>
        <button className="bg-black text-white p-2 rounded-none">LOG IN</button>
      </div>
    </div>
  );
};

export default LoginView;
