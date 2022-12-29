import postbox from "./css/postbox.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Postbox({board}) {
  if(board.exDate !== undefined){
  return (
    <div>
      <div className={postbox.postbox}>
        <Link to={`/postpage`}>
          <div className={postbox.postbox1}>
            <p className={postbox.headline}>{board.title}</p>
            <p className={postbox.inline}>
              {board.content}
            </p>
            <hr className={postbox.postdiv}></hr>
            <p className={postbox.deadline}>마감일</p>
            <p className={postbox.deadlinedate}>{board.exDate}</p>
            <p className={postbox.postuser}>작성자</p>
            <p className={postbox.postusername}>{board.writerName}</p>
            <p className={postbox.people}>{board.maxApp}</p>
            <button className={postbox.state}>마감완료</button>
          </div>
        </Link>
        <div className={postbox.postbox2}>
          <p className={postbox.headline}>운동 알림 서비스 프로젝트</p>
          <p className={postbox.inline}>
            건강한 삶을 위해 다양한 운동 정보와
            <br />
            자신이 정한 시간에 운동을 할 수 있도록
            <br />
            알림 서비스를 제공하는 생략생략생략생략생략생략략략략략
          </p>
          <hr className={postbox.postdiv}></hr>
          <p className={postbox.deadline}>마감일</p>
          <p className={postbox.deadlinedate}>2023년 01월 18일</p>
          <p className={postbox.postuser}>작성자</p>
          <p className={postbox.postusername}>김원욱</p>
          <p className={postbox.people}>2/4</p>
          <button className={postbox.state}>Mo.zip</button>
        </div>
        <div className={postbox.postbox3}></div>
        <div className={postbox.postbox4}></div>
      </div>
    </div>
  );
  }
}
Postbox.prototype = {
  exDate: PropTypes.string.isRequired,
}
