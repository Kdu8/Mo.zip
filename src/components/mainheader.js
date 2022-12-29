import main from "./css/main.module.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";

const SERVER_URL = "http://api.mo-zip.online/users/me";

export default function Mainheader() {
  const [name, setname] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setname(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getUser = async (e) => {
    await axios
      .get(SERVER_URL, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      })
      .catch(alert("유저 정보 불러오기 실패"));
    fetchData();
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className={main.header}>
        <Link to={`/main`}>
          <img src={logo} className={main.logo} alt="Mo.zip" />
        </Link>
        <Link to={`/mypage`}>
          <button className={main.myinfo}>
            <span className="material-symbols-outlined" id={main.myinfoicon}>
              person
            </span>
            {name?.map((me) => (
              <div key={me.id} className={main.myinfo}>
                <div>{me.name}</div>
              </div>
            ))}
          </button>
        </Link>
        <Link to={`/login`}>
          <button className={main.logout}>
            <span className="material-symbols-outlined" id={main.logouticon}>
              logout
            </span>
            Log out
          </button>
        </Link>
        <hr className={main.navbar}></hr>
      </div>
      <div className={main.body}></div>
    </div>
  );
}
