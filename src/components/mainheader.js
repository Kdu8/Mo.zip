import main from "./css/main.module.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LOGOUT_URL = "https://api.mo-zip.online/auth/logout";

export default function Mainheader({ user }) {
  console.log(user);
  const replace = useNavigate();
  const Logout = () => {
    axios.get(LOGOUT_URL, { withCredentials: true }).
    then((res)=> {
      console.log();
      replace(`/intro`);
    }).catch(err => {
      console.log(err);
      alert("로그인 실패");
    }
    )
  }
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
            {user}
          </button>
        </Link>
          <button className={main.logout} onClick={Logout}>
            <span className="material-symbols-outlined" id={main.logouticon}>
              logout
            </span>
            Log out
          </button>
        <hr className={main.navbar}></hr>
      </div>
      <div className={main.body}></div>
    </div>
  );
}
