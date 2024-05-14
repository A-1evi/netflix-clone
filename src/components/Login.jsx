import React, { useRef, useState } from "react";
import Header from "./Header.jsx";
import { checkValidateData } from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { LOGIN_BG } from "../utils/constants.js";
import lang from "../utils/languageConstants.js";

const Login = () => {
  const dispatch = useDispatch();


  const langKey = useSelector(store => store.config.lang)


  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const handleSignUpForm = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    //Sign in Signup logic

    if (isSignUpForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );

              // ...
            })
            .catch((error) => {
              setErrorMessage(error);
            });
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className=" ">
      <Header />
      <div className="absolute  ">
        <img className="w-screen h-screen object-cover" src={LOGIN_BG}></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute md:w-3/12 md:h-4/6 bg-black m-auto left-0 right-0 p-12 md:my-48 my-24  text-white bg-opacity-80 rounded-lg h-3/4 "
      >
        <h1 className="md:text-3xl p-2 my-2 text-2xl font-bold ">
        {isSignUpForm ? lang[langKey].signUp : lang[langKey].signIn}
        </h1>
        {isSignUpForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-neutral-900 w-full bg-opacity-70 "
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-neutral-900 w-full bg-opacity-70 "
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-neutral-900 w-full bg-opacity-70"
        ></input>
        <p className="text-red-600 text-sm font-semibold p-2 m-2">
          {errorMessage}
        </p>
        <button
          type="submit"
          className="p-2 my-2 bg-red-600 w-full rounded-sm"
          onClick={handleButtonClick}
        >
          {isSignUpForm ? lang[langKey].signUp : lang[langKey].signIn}
        </button>
        <p
          className="py-5 font-semibold cursor-pointer"
          onClick={handleSignUpForm}
        >
          {isSignUpForm
            ? "Already Signed up? Sign in now."
            : "New to Netflix? Sign up now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
