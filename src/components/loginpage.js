import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import login from "./css/login.module.css";
import logo from "./img/logo.png";
import { useEffect, useState } from "react";
import axios from "axios";

const SERVER_URL = 'http://ec2-52-79-236-28.ap-northeast-2.compute.amazonaws.com/auth/emailVerify';

function Logpage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setUser(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    await axios.post(SERVER_URL, { email });
    fetchData();
    console.log(user.data);
  };

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <div className={login.body}>
      <div className={login.container}>
        <img src={logo} className={login.logo} alt="Mo.zip" />
        <div className={login.easy}>이메일로 간단하게</div>
        <div className={login.one}>하나의 계정으로 Mo.zip을 이용하세요.</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요."
            maxlength="16"
            className={login.getEmail}
            {...register("email", { required: true, pattern: /(\W|^)[\w.\-]{0,25}@(gsm.hs)\.kr(\W|$)/ })}
          />
          {errors.email && (
            <p className={login.correct}>유효한 이메일이 아닙니다.</p>
          )}
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
