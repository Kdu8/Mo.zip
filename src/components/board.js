import Mainheader from "./mainheader";
import postpage from "./css/postpage.module.css";
import Userlist from "../components/userlist";
import arrow from "./img/arrow.png";
import category1 from "./css/category1.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const SERVER_URL = "https://api.mo-zip.online/users/me";

export default function Postpage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get(SERVER_URL, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUser(res.data.user.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [boardget, setBoardget] = useState();
  useEffect(() => {
    axios.get("https://api.mo-zip.online/boards/" + id).then((res) => {
      console.log(res.data);
      setBoardget(res.data);
    });
  }, []);

  const ApplySubmit = async () => {
    await axios
      .get("https://api.mo-zip.online/boards/" + id + "/toggle-apply", {
        withCredentials: true,
      })
      .then((res) => {
        alert("신청 상태가 바뀌었습니다.");
        navigate(`/main`);
      })
      .catch((err) => {
        alert("신청 실패");
      });
  };
  if (boardget?.board?.exDate) {
    const newexDate = new Date(boardget.board.exDate);
    const year = newexDate.getFullYear();
    const month = newexDate.getMonth();
    const day = newexDate.getDate();
    return (
      <div className={postpage.body}>
        <Mainheader user={user} />
        <Link to={`/category1`}>
          <button className={category1.category1}>운동</button>
        </Link>
        <Link to={`/category2`}>
          <button className={category1.category2}>프로젝트</button>
        </Link>
        <Link to={`/category3`}>
          <button className={category1.category3}>공동구매</button>
        </Link>
        <div className={postpage.postcontainer}>
          <div className={postpage.titlebox}>
            <p className={postpage.title}>{boardget.board.title}</p>
          </div>
          <div>
            <div className={postpage.writerbox}>
              <p className={postpage.name}>작성자: {boardget.writerName}</p>
            </div>
            <div className={postpage.exDatebox}>
              <p className={postpage.exDate}>
                마감일 : {`${year}년 ${month + 1}월 ${day}일`}
              </p>
            </div>
            <div className={postpage.maxAppbox}>
              <p className={postpage.maxApp}>
                모집인원 : {boardget.board.maxApp}
              </p>
            </div>
          </div>
          <div className={postpage.contentbox}>
            <p className={postpage.content}>{boardget.board.content}</p>
          </div>
          <div className={postpage.needbox}>
            <p className={postpage.need}>{boardget.board.requirement}</p>
          </div>
          <Userlist userlist={boardget.users} />
        </div>
        <div className={postpage.arrowmain}>
          <button onClick={ApplySubmit} className={postpage.apply}>
            신청/신청취소
          </button>
          <Link to={`/main`}>
            <img src={arrow} alt="나가기" className={postpage.arrow} />
            <p className={postpage.gomain}>나가기</p>
          </Link>
        </div>
      </div>
    );
  }
}
