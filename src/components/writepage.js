import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import write from "./css/write.module.css";
import arrow from "./img/arrow.png";
import Mainheader from "./mainheader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ko } from 'date-fns/esm/locale';

const SERVER_URL = "https://api.mo-zip.online/boards";
const USER_URL = "https://api.mo-zip.online/users/me";

function Writepage() {
  const replace = useNavigate();
  const [endDate, setEndDate] = useState(new Date());

  const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    );
  };

  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName("category");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    const content = e.target.content.value;
    let exDate = new Date(e.target.exDate.value);
    const maxApp = Number(e.target.maxApp.value);
    const title = e.target.title.value;
    const requirement = e.target.requirement.value;

    exDate.setDate(exDate.getDate() + 1);
    exDate = exDate.toISOString();

    await axios
      .post(
        SERVER_URL,
        { category, content, exDate, maxApp, title, requirement },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        alert("글이 등록되었습니다.");
        replace(`/main`);
      })
      .catch((err) => {
        console.log(err);
        alert("글 등록 실패");
      });
  };
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get(USER_URL, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUser(res.data.user.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={write.main}>
      <Mainheader user={user}/>
      <div className={write.writemain}>
        <form onSubmit={onSubmitHandler}>
          <div className={write.writebody}>
            <textarea
              type="text"
              name="title"
              placeholder="제목을 입력하세요"
              className={write.title}
            />
            <textarea
              type="text"
              name="content"
              placeholder="내용을 입력하세요"
              className={write.intitle}
            />
            <textarea
              type="text"
              name="requirement"
              placeholder="요구조건을 작성하세요"
              className={write.need}
            />
          </div>

          <div className={write.checkbody}>
            <p className={write.enddate}>모집 기간</p>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              endDate={endDate}
              minDate={new Date()}
              dateFormat="yyyy/MM/dd"
              className={write.enddateinput}
              name="exDate"
              locale={ko}
            />
            <p className={write.people}>최대 인원</p>
            <input type="number" className={write.peopleinput} name="maxApp" />

            <p className={write.categorybox}>카테고리</p>

            <div className={write.categorybox1_1}>
              <input
                type="radio"
                id="sport"
                className={write.categorybox1}
                name="category"
                value="Sports"
                onChange={(e) => checkOnlyOne(e.target)}
              />
              <label htmlFor="sport" className={write.category1_1}>
                운동
              </label>
            </div>

            <div className={write.categorybox2_2}>
              <input
                type="radio"
                id="project"
                className={write.categorybox2}
                value="Project"
                name="category"
                onChange={(e) => checkOnlyOne(e.target)}
              />
              <label htmlFor="project" className={write.category2_2}>
                프로젝트
              </label>
            </div>

            <div className={write.categorybox3_3}>
              <input
                type="radio"
                id="buy"
                className={write.categorybox3}
                value="Purchase"
                name="category"
                onChange={(e) => checkOnlyOne(e.target)}
              />
              <label htmlFor="buy" className={write.category3_3}>
                공동구매
              </label>
            </div>

            <input type="submit" value="게시하기" className={write.submit} />
          </div>
        </form>
        <div className={write.outmain}>
          <Link to={`/main`}>
            <img src={arrow} alt="나가기" className={write.arrow} />
            <label className={write.gomain}>나가기</label>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Writepage;
