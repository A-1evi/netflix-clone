import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

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
    <div className="z-40 absolute w-screen bg-gradient-to-b from-black flex justify-between h-28 pr-6 ">
      <img
        className="w-44 h-20 mx-10   "
        src= {LOGO}
      />
      {user && (
        <div className="flex">
          <img
            className="w-14 h-14 p-1 mx-2 my-5 "
            onClick={ShowSignOut}
            src= {USER_ICON}
            alt="user.png"
          ></img>
          
          <div className="absolute top-24">
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
