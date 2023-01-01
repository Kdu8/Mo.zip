import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import mypage from "./css/mypage.module.css";

const Mywrite = ({ write }) => {
  const replace = useNavigate();
  const Delete = () => {
    axios
      .delete("https://api.mo-zip.online/boards/" + write.id, {
        withCredentials: true,
      })
      .then((res) => {
        alert("삭제 성공");
        replace(`/mypage`);
      });
  };
  return (
    <div className={mypage.listbox}>
      <div className={mypage.listtitle}>{write.title}</div>
      <button className={mypage.editbtn} id={mypage.button}>
        수정
      </button>
      <button className={mypage.removebtn} onClick={Delete} id={mypage.button}>
        삭제
      </button>
    </div>
  );
};

export default Mywrite;
