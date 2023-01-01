import Mainheader from "./mainheader";
import postpage from "./css/postpage.module.css";
import postarrow from "./img/postarrow.png";
import arrow from "./img/arrow.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Postpage() {
  const {id} = useParams();
  const [board, setBoard] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [boardget, setBoardget] = useState();
  useEffect(() => {
    axios.get("https://api.mo-zip.online/boards/"+id).then(res => {
      console.log(res.data);
      setBoardget(res.data);
    })
  }, []);

  const ApplySubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://api.mo-zip.online/boards/"+id+"/toggle-apply", { withCredentials: true })
      .then((res) => {
        alert("신청되었습니다.");
        navigate(`/main`);
      })
      .catch((err) => {
        alert("신청 실패");
      });
  };

  const newexDate = new Date(boardget.board.exDate);
    const year = newexDate.getFullYear();
    const month = newexDate.getMonth();
    const day = newexDate.getDate();
  return (
    <div className={postpage.body}>
      <Mainheader />

      <div className={postpage.postcontainer}>
        <p className={postpage.title}>{boardget.board.title}</p>
        <p className={postpage.name}>작성자: {boardget.writerName}</p>
        <p className={postpage.exDate}>마감일 : {`${year}년 ${
              month + 1
            }월 ${day}일`}</p>
        <p className={postpage.maxApp}>모집인원 : {boardget.board.maxApp}</p>
        <p className={postpage.content}>
          {boardget.board.content}
        </p>
        <p className={postpage.need}>{boardget.board.requirement}</p>
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
