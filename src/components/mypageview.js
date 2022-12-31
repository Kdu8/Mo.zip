import mypage from "./css/mypage.module.css";
import Mainheader from "./mainheader";
import { useState, useEffect } from "react";
import Userboardlist from "./userboardlist";
import axios from "axios";

const SERVER_URL = "https://api.mo-zip.online/users/me";

function Mypage() {
  const [user, setUser] = useState("");
  const [userboard, setUserboard] = useState("");
  useEffect(() => {
    axios
      .get(SERVER_URL, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUser(res.data.user.name);
        setUserboard(res.data.myBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
          <div className={mypage.listtitle}>
          {userboard.map((ele) => {
            return <Userboardlist board={ele} />;
          })}
          </div>
          <div className={mypage.navigate}>
            <span className="material-symbols-outlined" id={mypage.backarrow}>
              arrow_back_ios
            </span>
            <div className={mypage.number}> 1 </div>
            <span
              className="material-symbols-outlined"
              id={mypage.forwardarrow}
            >
              arrow_forward_ios
            </span>
          </div>
        </section>

        <section className={mypage.apply}>
          <div className={mypage.title}>신청 목록</div>
          <div className={mypage.listbox}>
            <div className={mypage.listtitle}>
              기숙사에서 먹을 간식 공동 구매 할 사람
            </div>
            <button className={mypage.editbtn} id={mypage.button}>
              보기
            </button>
            <button className={mypage.removebtn} id={mypage.button}>
              삭제
            </button>
          </div>
          <div className={mypage.navigate}>
            <span className="material-symbols-outlined" id={mypage.backarrow}>
              arrow_back_ios
            </span>
            <div className={mypage.number}> 1 </div>
            <span
              className="material-symbols-outlined"
              id={mypage.forwardarrow}
            >
              arrow_forward_ios
            </span>
          </div>
        </section>
      </section>
    </div>
  );
}
export default Mypage;
