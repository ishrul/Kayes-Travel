import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const loginWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
    /* .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      }); */
  };
  // state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
      }
      setIsLoading(false);
    });
  }, []);

  // LOG OUT
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  };

  console.log(user);

  return {
    loginWithGoogle,
    logOut,
    setUser,
    user,
    isLoading,
  };
};

export default useFirebase;
