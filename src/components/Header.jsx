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

  const showGpt = useSelector(store => store.gpt.showGpt)

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
    <div className="z-50 absolute w-screen px-9 py-2 bg-gradient-to-b from-black flex justify-between  pr-6 ">
      <img className="w-60" src={LOGO} />
      <select
        className="p-2 bg-gray-800 text-white m-8 absolute right-56"
        onChange={handleLanguageChange}
      >
        {SUPPORTED_LANG.map((lang) => (
          <option key={lang.indentifier} value={lang.indentifier}>
            {lang.name}
          </option>
        ))}
      </select>

      {user && (
        <div className="flex p-2">
          <button
            className="py-2 px-4 m-6 bg-blue-600 text-white rounded-lg font-bold shadow-lg"
            onClick={handleShowGpt}
          >
            {showGpt ? "Home" : "GPT" + " " + lang[langKey].search}
          </button>
          <img
            className="w-14 h-14 p-1 mx-2 my-5 "
            onClick={ShowSignOut}
            src={USER_ICON}
            alt="user.png"
          ></img>

          <div className="absolute top-24 right-4 ">
            {showSignOutButton && (
              <button
                className="bg-red-600 px-2  mr-5 text-white rounded-sm font-bold"
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
