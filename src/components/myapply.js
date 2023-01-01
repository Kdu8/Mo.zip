import React from "react";
import mypage from "./css/mypage.module.css";
import axios from "axios";

const Myapply = ({ apply }) => {
  const Apply = async () => {
    await axios
      .get("https://api.mo-zip.online/boards/" + apply.id + "/toggle-apply", {
        withCredentials: true,
      })
      .then((res) => {
        alert("취소 성공");
        window.location.reload();
      })
      .catch((err) => {
        alert("취소 실패");
        window.location.reload();
      });
  };
  return (
    <div className={mypage.listbox}>
      <div className={mypage.listtitle}>{apply.title}</div>
      <button className={mypage.editbtn} id={mypage.button}>
        수정
      </button>
      <button className={mypage.removebtn} onClick={Apply} id={mypage.button}>
        취소
      </button>
    </div>
  );
};

export default Myapply;
