import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { __AUTH } from "../backend/firebaseconfig";
import { NavLink, useNavigate } from "react-router-dom";
import Spinner from "../helper/Spinner";

const Register = () => {
  let navigate = useNavigate();
  let [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let [showPassword1,setShowPassword1] = useState(false);
  let [showPassword2,setShowPassword2] = useState(false);
  let[isLoading,setIsLoading] = useState(false)
  //! destructuring of an user data
  let { username, email, password, confirmPassword } = userData;
  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };
  let handleSubmit = async(e) => {
     e.preventDefault();
     setIsLoading(true)
    try{
      if(password === confirmPassword){
        let registeredUser = await createUserWithEmailAndPassword(__AUTH,email,password)
console.log(registeredUser);
//!send email verification
sendEmailVerification(registeredUser.user)
//!update profile name & photo url which is not updated by default
updateProfile(registeredUser.user,{
  displayName:username,
  photoURL:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
})
toast.success(`email verification has been sent to your registered ${email}`)



toast.success("user has been registered successfully!!!!!!")
navigate("/auth/login");

    }else{
      toast.error("password does not match")
      setUserData({
        password:"",
        confirmPassword:""
      })
    }
      }
//! create the user with email and password
catch(error){
      toast.error(error.code.slice(5))
};
      setIsLoading(false)
     
    
   
 
  };
  let togglePassword1 = () =>{
    setShowPassword1(!showPassword1)
  }
  let togglePassword2 = () =>{
    setShowPassword2(!showPassword2)
  }
  
  return (
    <section className="text-white w-[100vw] min-h-[90vh] flex justify-center items-center">
      <article className="w-[30%] bg-gray-600 p-5 rounded-xl">
        <header className="text-center text-2xl font-bold py-3">
          <h1>Register</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-1 p-3">
            <label htmlFor="username" className="font-semibold text-lg mb-1">
              UserName:
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your Name "
              name="username"
              value={username}
              onChange={handleInputChange}
              className="outline-none border border-gray-500 pd-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col mb-1 p-3">
            <label htmlFor="email" className="font-semibold text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="outline-none border border-gray-500 pd-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col mb-1 p-3 relative">
            <label htmlFor="password" className="font-semibold text-lg mb-1">
              Password
            </label>
            <input
              type={showPassword1?"text":"password"}
              id="password"
              placeholder="enter your password"
              name="password"
              value={password}
              onChange={handleInputChange}
              className="outline-none border border-gray-500 pd-2 rounded-lg"
            />
            <span onClick={togglePassword1}className="absolute bottom-[18px] right-[20px] cursor-pointer text-lg">{showPassword1?<IoEye/>:<IoEyeOff/>}</span>
          </div>
          <div className="flex flex-col mb-1 p-3 relative">
            <label
              htmlFor="confirmPassword"
              className="font-semibold text-lg mb-1"
            >
              Confirm Password
            </label>
            <input
              type={showPassword2?"text":"password"}
              id="confirmPassword "
              placeholder="confirm your password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
              className="outline-none border   border-gray-500 pd-2 rounded-lg"
            />
            <span onClick={togglePassword2}className="absolute bottom-[21px] right-[20px] cursor-pointer text-lg">
              {showPassword2?<IoEye/>:<IoEyeOff/>}</span>
          </div>
          <div className="flex flex-col mb-1 p-3">
            <button className="bg-blue-500 py-2 text-lg rounded-lg cursor-pointer font-semibold hover:bg-cyan-950">
             register
            </button>
          </div>
          <div>
            <NavLink to={"/auth/login"}className={"flex justify-center items-center hover:text-blue-500 hover:underline"}>Already Have An Account?</NavLink>
          </div>
        </form>
      </article>
      {isLoading && (<section className='w-[100%] h-[100vh] bg-black/50 fixed top-0'>
      <Spinner/>
    </section>)}
    </section>
  );
};

export default Register;
