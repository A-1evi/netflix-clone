import React, { useState } from "react";
import Header from "./Header.jsx";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const handleSignUpForm = () => {
    setIsSignUpForm(!isSignUpForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg"></img>
      </div>
      <form className="absolute w-3/12 bg-black m-auto left-0 right-0 p-12 my-36  text-white bg-opacity-80 rounded-lg ">
        <h1 className="text-3xl p-2 my-2 font-bold">
          {isSignUpForm ? "Sign Up " : "Sign In"}
        </h1>
        {isSignUpForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-neutral-900 w-full bg-opacity-70 "
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-neutral-900 w-full bg-opacity-70 "
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-neutral-900 w-full bg-opacity-70"
        ></input>
        <button type="submit" className="p-2 my-2 bg-red-600 w-full rounded-sm">
          Sign In
        </button>
        <p className="py-5 font-semibold cursor-pointer" onClick={handleSignUpForm}>
          {isSignUpForm
            ? "Already Signed up? Sign in now."
            : "New to Netflix? Sign up now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
