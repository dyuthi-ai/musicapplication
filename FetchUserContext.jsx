import { doc, onSnapshot } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { __DB } from "../backend/firebaseconfig";
import { AuthUserContext } from "./AuthContextApi";

//! Step-1: Create context for the backend user
export let BackendUserContext = createContext(null);

const FetchUserContext = ({ children }) => {
  let authUser = useContext(AuthUserContext);
  let [uid,setUid] = useState("Qfu0ZTqewsZp9Ny7tsVjJbT7ETu1")
 //let uid = "Qfu0ZTqewsZp9Ny7tsVjJbT7ETu1";

  // 🔹 Check if authUser is available
  useEffect(() => {
    // console.log("AuthUser from Context:", authUser);
    // console.log(authUser);
    setUid(authUser?.uid);
  }, [authUser]);

//   console.log("Fetched UID:", uid); // Debugging line

  let [userData, setUserData] = useState();
  let [role, setRole] = useState("");

  useEffect(() => {
    //let uid = "Qfu0ZTqewsZp9Ny7tsVjJbT7ETu1";
    if (!uid) {
      console.log("User UID is undefined, skipping fetch.");
      return;
    }

    let fetchProfile = () => {
      let user_data_reference = doc(__DB, "user_details", uid);


      onSnapshot(user_data_reference, (userInfo) => {
        if (userInfo.exists()) {
          setUserData(userInfo?.data());
          setRole(userInfo?.data()?.role);
        //   console.log("User Data Fetched:", userInfo?.data());
        } else {
          console.log("Profile data not found.");
        }
      });
    };

    fetchProfile();
  }, [uid]); //* Dependency on uid

  return (
    <BackendUserContext.Provider value={{ userData, role }}>
      {children}
    </BackendUserContext.Provider>
  );
};

export default FetchUserContext;
