import React from "react";
import postpage from "./css/postpage.module.css";

const userlist = ({ userlist }) => {
    return (
      <div className={postpage.usercontainer}>
        <p className={postpage.list}>신청자 목록</p>
        <ul className={postpage.user}>
          {userlist.map((ele) => {
            return (
              <li className={postpage.name}>
                {ele.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default userlist;
