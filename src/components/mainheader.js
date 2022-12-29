import main from "./css/main.module.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";

const SERVER_URL = "http://api.mo-zip.online/users/me";

export default function Mainheader() {
  const [name, setName] = useState('');

  const getUser = async (e) => {
    await axios
      .get(SERVER_URL, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        //setName(res.data.name);
      })
      .catch(err => {
        console.log(err);
      });
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
