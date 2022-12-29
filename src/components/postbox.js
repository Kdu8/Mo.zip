import postbox from "./css/postbox.module.css";
import { Link } from "react-router-dom";
export default function Postbox({board}) {
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
      </div>
    </div>
  );
}
