import Mainheader from "./mainheader";
import postpage from "./css/postpage.module.css";
import postarrow from "./img/postarrow.png";
import arrow from "./img/arrow.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SERVER_URL = "https://api.mo-zip.online/boards/{id}";
export default function Postpage() {
  const replace = useNavigate();
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(SERVER_URL, { withCredentials: true })
      .then((res) => {
        console.log(res);
        // setList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const ApplySubmit = async (e) => {
    e.preventDefault();
    await axios.post(SERVER_URL, { withCredentials: true }).then((res) => {
      alert("신청되었습니다.");
      replace(`/main`);
    }).catch(err=>{
      alert("신청 실패");
      replace(`/main`);
    });
  };
  return (
    <div className={postpage.body}>
      <Mainheader />

      <div className={postpage.postcontainer}>
        <p className={postpage.title}>제목</p>
        <p className={postpage.name}>작성자: 한준</p>
        <p className={postpage.exDate}>마감일 : yyyy/mm/dd</p>
        <p className={postpage.maxApp}>모집인원 : 2</p>
        <p className={postpage.content}>
          어쩌고 저쩌고 막 글 내용 있고 모집 내용 있고
          <br />
          쏼라 쏼라ㅂ럽럽ㄹ바럽러바ㅓㄹ바라버라바버랍
          <br />
          라버ㅏ버라ㅓ바ㅓ랍러ㅏ버랍버라버라버라버ㅏ버
          <br />
          버라버라버라버라버라버버라버라버라버라버ㅏ
        </p>
        <p className={postpage.need}>요구조건</p>
        <div className={postpage.userslist}>
          <p className={postpage.nowlist}>신청목록이 궁금하신가요?</p>
          <Link to={`/userList`}>
          <p className={postpage.golist}>
            신청자 목록 보러가기
            <img src={postarrow} alt="golist" className={postpage.arrow} />
          </p>
          </Link>
        </div>
      </div>
      <div className={postpage.arrowmain}>
        <form onSubmit={ApplySubmit}>
          <button type="submit" className={postpage.apply}>
            신청하기
          </button>
        </form>
        <Link to={`/main`}>
          <img src={arrow} alt="나가기" className={postpage.arrow} />
          <p className={postpage.gomain}>나가기</p>
        </Link>
      </div>
    </div>
  );
}
