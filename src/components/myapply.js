import React from "react";
import mypage from "./css/mypage.module.css";

const Myapply = ({ apply }) => {
  return (
    <div className={mypage.listbox}>
      <div className={mypage.listtitle}>{apply.title}</div>
      <button className={mypage.editbtn} id={mypage.button}>
        보기
      </button>
      <button className={mypage.removebtn} id={mypage.button}>
        취소
      </button>
    </div>
  );
};

export default Myapply;
