import React from "react";
import { Link } from "react-router-dom";
import login from "./css/login.module.css";
import logo from "./img/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SERVER_URL = 'https://api.mo-zip.online/auth/emailVerify';

function Logpage() {
  const replace = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    await axios.post(SERVER_URL, { email }, { withCredentials: true }).then((res)=>{
      console.log(res.data);
      alert("이메일을 확인해주세요.");
      replace(`/check`);
    }).catch(err => {
      console.log(err);
      alert("로그인 실패");
    });
  };

  return (
    <div className={login.body}>
      <div className={login.container}>
        <img src={logo} className={login.logo} alt="Mo.zip" />
        <div className={login.easy}>이메일로 간단하게</div>
        <div className={login.one}>하나의 계정으로 Mo.zip을 이용하세요.</div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요."
            maxLength="16"
            className={login.getEmail}
          />
          <input
            className={login.submit}
            type="submit"
            value="확인"
          />
        </form>
        <div className={login.containerfoot}>
          <div className={login.not}>아직 계정이 없으신가요?</div>
          <Link to={`/signup`} className={login.join}>
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Logpage;
