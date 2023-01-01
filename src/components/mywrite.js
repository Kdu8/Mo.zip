import React from "react";
import mypage from "./css/mypage.module.css";

const Mywrite = ({ write }) => {
  return (
    <div className={mypage.listbox}>
      <div className={mypage.listtitle}>{write.title}</div>
      <button className={mypage.editbtn}>수정</button>
      <button className={mypage.removebtn}>삭제</button>
    </div>
  );
};

export default Mywrite;
