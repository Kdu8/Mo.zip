import main from "./css/main.module.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

export default function Mainheader({ user }) {
  console.log(user);
  return (
    <div>
      {user.map(user => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}
