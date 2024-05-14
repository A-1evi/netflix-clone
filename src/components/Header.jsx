import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANG, USER_ICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const showGpt = useSelector((store) => store.gpt.showGpt);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const langKey = useSelector((store) => store.config.lang);

  const dispatch = useDispatch();

  const handleShowGpt = () => {
    dispatch(toggleGptSearchView());
  };

  const [showSignOutButton, setShowSignOutButton] = useState(false);
  const ShowSignOut = () => {
    setShowSignOutButton(!showSignOutButton);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsuscribe();
  }, []);

  return (
    <div className="z-50 absolute w-screen md:px-9 md:py-2 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between  md:pr-6  ">
      <img className="w-36 md:w-60 mx-auto md:mx-0" src={LOGO} />
      <select
        className="md:p-2 bg-gray-800 text-white mr-2 absolute right-3  mt-3 md:right-60 md:m-8  "
        onChange={handleLanguageChange}
      >
        {SUPPORTED_LANG.map((lang) => (
          <option className="" key={lang.indentifier} value={lang.indentifier}>
            {lang.name}
          </option>
        ))}
      </select>

      {user && (
        <div className="flex p-2">
          <button
            className="md:py-2 md:px-4 md:m-6  m-8 ml-1 bg-blue-600 text-white rounded-lg md:font-bold text-sm md:text-xl md:font-bold"
            onClick={handleShowGpt}
          >
            {showGpt ? "Home" : "GPT" + " " + lang[langKey].search}
          </button>
          <img
            className="md:w-14 h-11 md:h-14 p-1 md:mx-2 my-6 mx-32  "
            onClick={ShowSignOut}
            src={USER_ICON}
            alt="user.png"
          ></img>

          <div className="absolute top-24 right-4 ">
            {showSignOutButton && (
              <button
                className="bg-red-600 px-1 py-1   mr-0 my-0 md:my-2 md:mr-5 md:my-10 text-white rounded-sm md:font-bold"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
