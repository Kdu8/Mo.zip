import React from "react";
import userList from "./css/userlist.module.css";

const userlist = ({ userlist }) => {
  if (userList !== undefined) {
    return (
      <div className={userList.container}>
        <p className={userList.list}>신청자 목록</p>
        <ul className={userList.user}>
          {userlist.map((ele) => {
            return (
              <li>
                {ele.name}/{ele.discord}/{ele.email}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default userlist;
