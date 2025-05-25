import React from "react";
import { NavLink } from "react-router-dom";
import { MdAccountBox } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
const ProfileSideBar = () => {
  return (
    <aside className="basis-[19%] bg-gray-700 text-white h-[calc(100vh-70px)]">
      <nav className="w-full h-[100vh]">
        <ul className="w-full p-5 flex flex-col">
          <li>
            <NavLink
              to={"/user/profile"}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-blue-600 hover:bg-blue-700" : ""
                } flex py-2 px-4 rounded-md items-center gap-2 cursor-pointer mb-4 font-semibold hover:bg-blue-600 `
              }
              end
            >
              <span className="text-xl mr-1">
                <MdAccountBox />
              </span>
              <span>My Account</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/user/profile/add-profile"}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-blue-600 hover:bg-blue-700" : ""
                } flex py-2 px-4 rounded-md items-center gap-2 cursor-pointer mb-4 font-semibold hover:bg-blue-600`
              }
              end
            >
              <span className="text-xl">
                <FaUserPlus />
              </span>
              <span>Add Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/user/profile/upload-profile-photo"}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-blue-600 hover:bg-blue-700" : ""
                } flex py-2 px-4 rounded-md items-center gap-2 cursor-pointer mb-4 font-semibold hover:bg-blue-600`
              }
              end
            >
              <span className="text-xl">
                <MdAddPhotoAlternate />
              </span>
              <span>upload Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/user/profile/change-password"}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-blue-600 hover:bg-blue-700" : ""
                } flex py-2 px-4 rounded-md items-center gap-2 cursor-pointer mb-4 font-semibold hover:bg-blue-600`
              }
              end
            >
              <span className="text-xl">
                <RiLockPasswordFill />
              </span>
              <span>change password</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/user/profile/delete-account"}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-blue-600 hover:bg-blue-700" : ""
                } flex py-2 px-4 rounded-md items-center gap-2 cursor-pointer mb-4 font-semibold hover:bg-blue-600`
              }
              end
            >
              <span className="text-xl">
                <MdDelete />{" "}
              </span>
              <span>Delete-accounte</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default ProfileSideBar;
