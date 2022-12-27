
import React from "react";
import signup from "./css/signup.module.css";
import logo from "./img/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SERVER_URL = "http://ec2-52-79-236-28.ap-northeast-2.compute.amazonaws.com/auth/join";

export default function Signpage() {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

  // const onSubmitcheck = (data) => {
  //   console.log("data", data);
  // };
  const replace = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const nickname = e.target.nickname.value;
    const tag = e.target.tag.value;

    await axios.post(SERVER_URL, { name, email, nickname, tag }, { withCredentials: true }).then((res)=>{
      console.log(res.data);
      replace(`/check`);
    }).catch(alert("빈창을 입력해주세요."));
    
  };

  return (
    <div className={signup.body}>
      <div className={signup.container}>
        <img src={logo} className={signup.logo} alt="Mo.zip" />
        <form onSubmit={onSubmitHandler}>
          <input
            name="name"
            className={signup.input1}
            placeholder="이름을 입력해주세요."
            //{...register("name", { required: true, maxLength: 10 })}
          />
          {/* {errors.name && errors.name.type === "required" && (
            <p className={signup.correct1}>이름을 정확히 써주세요.</p>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <p className={signup.correct1}>이름은 10자 이하로 적어주세요.</p>
          )} */}
          <input
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요."
            className={signup.input2}
            // {...register("email", {
            //   required: true,
            //   pattern: /(\W|^)[\w.\-]{0,25}@(gsm.hs)\.kr(\W|$)/,
            // })}
          />
          {/* {errors.email && (
            <p className={signup.correct2}>유효한 이메일이 아닙니다.</p>
          )} */}
          <input
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            className={signup.nickname}
          />
          <input name="tag" placeholder="#" 
          className={signup.tag} />
          <div className={signup.checkboxmom}>
            <input type="checkbox" id="check" className={signup.agreebox} />
            <label for="check" className={signup.agree}>
              이용약관 및 개인정보 보호정책에 동의합니다.
            </label>
          </div>
          <input
            className={signup.submit}
            type="submit"
            value="계정만들기"
          />
        </form>
      </div>
    </div>
  );
}
