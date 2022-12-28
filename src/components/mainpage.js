import { Link } from "react-router-dom";
import main from "./css/main.module.css";
import Mainheader from "./mainheader";
import { useEffect, useState } from "react";
import axios from "axios";
import meet from "./img/meet.png";

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
      
      <img src={meet} className={main.meet} alt="Mo.zip"/>
    </div>
  );
}
export default Mainpage;
