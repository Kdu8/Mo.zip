import { Link } from "react-router-dom";
import main from "./css/main.module.css";
import Mainheader from "./mainheader";
import logo from "./img/logo.png";
import { useEffect, useState } from "react";
import axios from "axios";

const SERVER_URL = "http://ec2-52-79-236-28.ap-northeast-2.compute.amazonaws.com/";

function Mainpage() {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.get(SERVER_URL, { }).then((res)=>{
      console.log(res.data);
    }).catch(alert("사용자 정보가 없습니다."));
    
  };
  return (
    <div className={main.main}>
      <Mainheader />
      <div className={main.body}>
        <h1 className={main.find}>
          내가 찾던 파트너와
          <br />
          함께하세요!
        </h1>
        <Link to={`/write`}>
          <button className={main.btn}>Mo.zip 하기</button>
        </Link>
      </div>
      <div className={main.postbox}>
        <div className={main.postbox1}>
          <p className={main.headline}>Mo.zip 프로젝트 모집</p>
          <p className={main.inline}>다수의 인원을 내가 원하는 파트너들과 함께<br /> 할 수 있도록 모집하는 웹사이트를 함께 개발할 Frontend 직군 파트너를 찾습니다 !</p>
          <hr className={main.postdiv}></hr>
          <p className={main.deadline}>마감일</p>
          <p className={main.deadlinedate}>2022년 12월 21일</p>
          <p className={main.postuser}>작성자</p>
          <p className={main.postusername}>김원욱</p>
          <p className={main.people}>2/2</p>
          <button className={main.state}>마감완료</button>
        </div>
        <div className={main.postbox2}>
        <p className={main.headline}>운동 알림 서비스 프로젝트</p>
          <p className={main.inline}>건강한 삶을 위해 다양한 운동 정보와<br />
자신이 정한 시간에 운동을 할 수 있도록<br />
알림 서비스를  제공하는 ...</p>
          <hr className={main.postdiv}></hr>
          <p className={main.deadline}>마감일</p>
          <p className={main.deadlinedate}>2023년 01월 18일</p>
          <p className={main.postuser}>작성자</p>
          <p className={main.postusername}>김원욱</p>
          <p className={main.people}>2/4</p>
          <button className={main.state}>Mo.zip</button>
        </div>
        <div className={main.postbox3}>
        </div>
        <div className={main.postbox4}>
        </div>
      </div>
    </div>
  );
}
export default Mainpage;
