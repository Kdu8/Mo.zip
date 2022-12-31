import React from 'react';
import mypage from "./css/mypage.module.css";

const userboardlist = ({board}) => {
    return (
        <div>
            <div className={mypage.listbox}>
            <div className={mypage.listtitle}>
              {board.title}
            </div>
            <button className={mypage.editbtn} id={mypage.button}>
              수정
            </button>
            <button className={mypage.removebtn} id={mypage.button}>
              삭제
            </button>
          </div>
        </div>
    );
};

export default userboardlist;