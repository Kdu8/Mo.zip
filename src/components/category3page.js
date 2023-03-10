import Category3 from "./css/category3.module.css";
import Mainheader from "./mainheader";
import Postbox from "./postbox";
import main from "./css/main.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BOARD_URL = "https://api.mo-zip.online/boards?category=Purchase&size=4&sort=id,DESC&page=0";
const SERVER_URL = "https://api.mo-zip.online/users/me";

function Category1page() {
  const [boardlist, setBoardList] = useState([]);
  useEffect(() => {
    axios.get(BOARD_URL, { withCredentials: true }).then((res) => {
      setBoardList(res.data);
    });
  }, []);

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
  return (
    <div className={Category3.main}>
      <Mainheader user={user} />
      <Link to={`/category1`}>
        <button className={Category3.category1}>운동</button>
      </Link>
      <Link to={`/category2`}>
        <button className={Category3.category2}>프로젝트</button>
      </Link>
      <Link to={`/category3`}>
        <button className={Category3.category3}>공동구매</button>
      </Link>
      <h1 className={main.find}>
        내가 찾던 파트너와
        <br />
        함께하세요!
      </h1>
      <Link to={`/write`}>
        <button className={main.btn}>Mo.zip 하기</button>
      </Link>
      <div
        style={{
          position: "absolute",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "1.8rem",
          rowGap: "1.8rem",
          width: "800px",
          height: "250px",
          top: "20%",
          left: "40%",
        }}
      >
        {boardlist.map((ele) => {
          return <Postbox board={ele} />;
        })}
      </div>
    </div>
  );
}
export default Category1page;
