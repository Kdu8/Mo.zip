import mypage from "./css/mypage.module.css";
import Mainheader from "./mainheader";
import { useState, useEffect } from "react";
import axios from "axios";
import Mywrite from "./mywrite";
import Myapply from "./myapply";

const SERVER_URL = "https://api.mo-zip.online/users/me";

function Mypage() {
  const [user, setUser] = useState("");
  const [userboard, setUserboard] = useState([]);
  const [userapply, setUserapply] = useState([]);
  useEffect(() => {
    axios
      .get(SERVER_URL, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUser(res.data.user.name);
        setUserboard(res.data.myBoards);
        setUserapply(res.data.myApplyBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(userboard);
  return (
    <div className={mypage.body}>
      <Mainheader user={user} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <section className={mypage.user}>
        <div className={mypage.inner}>
          <div className={mypage.userName}>{user}</div>
          <p className={mypage.userHi}>님 오늘도 좋은 하루 되세요!</p>
        </div>
      </section>
      <section className={mypage.contentbox}>
        <section className={mypage.writing}>
          <div className={mypage.title}>작성글</div>
          <div style={{display:"flex", flexDirection:"column"}}>
          {userboard.map((ele) => {
            return <Mywrite write={ele} />;
          })}
          </div>
        </section>

        <section className={mypage.apply}>
          <div className={mypage.title}>신청 목록</div>
          <div style={{display:"flex", flexDirection:"column"}}>
          {userapply.map((ele) => {
            return <Myapply apply={ele} />;
          })}
          </div>
        </section>
      </section>
    </div>
  );
}
export default Mypage;
