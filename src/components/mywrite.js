import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import mypage from "./css/mypage.module.css";
import { Link } from "react-router-dom";

const Mywrite = ({ write }) => {
  const Delete = () => {
    axios
      .delete("https://api.mo-zip.online/boards/" + write.id, {
        withCredentials: true,
      })
      .then((res) => {
        alert("삭제 성공");
        window.location.reload();
      })
      .catch((err) => {
        alert("삭제 실패");
        window.location.reload();
      });
  };
  return (
    <div className={mypage.listbox}>
      <div className={mypage.listtitle}>{write.title}</div>
      <button className={mypage.removebtn} onClick={Delete} id={mypage.button}>
        삭제
      </button>
    </div>
  );
};

export default Mywrite;
