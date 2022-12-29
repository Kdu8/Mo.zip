import { Link } from "react-router-dom";
import main from "./css/main.module.css";
import Mainheader from "./mainheader";
import meet from "./img/meet.png";
import axios from "axios";
import { useEffect, useState } from "react";

const SERVER_URL = "https://api.mo-zip.online/users/me";

function Mainpage() {
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
    <div className={main.main}>
      <Mainheader user={user}/>
      <Link to={`/category1`}>
        <button className={main.category1}>운동</button>
      </Link>
      <Link to={`/category2`}>
        <button className={main.category2}>프로젝트</button>
      </Link>
      <Link to={`/category3`}>
        <button className={main.category3}>공동구매</button>
      </Link>
      <h1 className={main.find}>
        내가 찾던 파트너와
        <br />
        함께하세요!
      </h1>
      <Link to={`/write`}>
        <button className={main.btn}>Mo.zip 하기</button>
      </Link>
      <img src={meet} className={main.meet} alt="Mo.zip" />
    </div>
  );
}
export default Mainpage;
