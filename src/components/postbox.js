import postbox from "./css/postbox.module.css";
import { Link } from "react-router-dom";
export default function Postbox() {
  return (
    <div>
      <div className={postbox.postbox}>
        <Link to={`/postpage`}>
          <div className={postbox.postbox1}>
            <p className={postbox.headline}>Mo.zip 프로젝트 모집</p>
            <p className={postbox.inline}>
              다수의 인원을 내가 원하는 파트너들과 함께
              <br /> 할 수 있도록 모집하는 웹사이트를 함께 개발할 Frontend 직군
              파트너를 찾습니다 !
            </p>
            <hr className={postbox.postdiv}></hr>
            <p className={postbox.deadline}>마감일</p>
            <p className={postbox.deadlinedate}>2022년 12월 21일</p>
            <p className={postbox.postuser}>작성자</p>
            <p className={postbox.postusername}>김원욱</p>
            <p className={postbox.people}>2/2</p>
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
            알림 서비스를 제공하는 ...
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
