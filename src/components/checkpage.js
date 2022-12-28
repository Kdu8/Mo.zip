import React from "react";
import check from "./css/check.module.css";
import logo from "./img/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SERVER_URL =
  "https://api.mo-zip.online/auth/emailConfirm";

function Checkpage() {
  const replace = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const verifyCode = e.target.verifyCode.value;

    console.log({verifyCode});
    await axios.post(SERVER_URL, { verifyCode }, { withCredentials: true }).then((response) => {
      console.log(response);
      replace(`/main`);
    }).catch(alert("인증번호 불일치"));
  };
  return (
    <div className={check.body}>
      <div className={check.container}>
        <img src={logo} className={check.logo} alt="Mo.zip" />
        <form onSubmit={onSubmitHandler}>
          <div className={check.checknum}>이메일 인증하기</div>
          <div className={check.one}>하나의 계정으로 Mo.zip을 이용하세요.</div>
          <input
            placeholder="인증번호를 입력해주세요."
            className={check.getchecknum}
            name="verifyCode"
          />
          <input className={check.submit} type="submit" value="확인"/>
        </form>
      </div>
    </div>
  );
}
export default Checkpage;
