import postbox from "./css/postbox.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Postbox({ board }) {
  if (board !== undefined && board.exDate !== undefined) {
    let moziping = "Mo.zip";
    if (board.finished) {
      moziping = "마감완료";
    }
    const newexDate = new Date(board.exDate);
    const year = newexDate.getFullYear();
    const month = newexDate.getMonth();
    const day = newexDate.getDate();
    
    return (
      <div className={board.body}>
        <div className={board.id}>
          <div className={postbox.postbox}>
            <Link to={`/postpage`} className={postbox.awidth}>
              <p className={postbox.headline}>{board.title}</p>

              <p className={postbox.inline}>{board.content}</p>
              <hr className={postbox.postdiv}></hr>
              <p className={postbox.deadline}>마감일</p>
              <p className={postbox.deadlinedate}>{`${year}년 ${
                month + 1
              }월 ${day}일`}</p>
              <p className={postbox.postuser}>작성자</p>
              <p className={postbox.postusername}>{board.writerName}</p>
              <p
                className={postbox.people}
              >{`${board.applicantCount}/${board.maxApp}`}</p>
              <button className={postbox.state}>{moziping}</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Postbox.prototype = {
  exDate: PropTypes.string.isRequired,
};
