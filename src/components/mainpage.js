import { Link } from "react-router-dom";
import main from "./css/main.module.css";
import Mainheader from "./mainheader";
import axios from "axios";
import { useEffect, useState } from "react";
import meet from "./img/meet.png";

const SERVER_URL = "http://mo-zip.online/user-controller";

function Mainpage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(SERVER_URL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className={main.main}>
      <Mainheader users={users}/>
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
