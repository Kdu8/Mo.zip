import { Link } from "react-router-dom";
import main from "./css/main.module.css";
import Mainheader from "./mainheader";
import axios from "axios";
import { useEffect, useState } from "react";
import meet from "./img/meet.png";

const SERVER_URL = "http://api.mo-zip.online/users/me";

function Mainpage() {
  const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    const getUser = async () => {
      const json = await (
        await fetch(
          SERVER_URL
        )
      ).json();
      setUser(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getUser();
    }, []);

  return (
    <div className={main.main}>
      {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            
            {user.map((user) => 
            <Mainheader 
              key={user.id}
              name={user.name}
            />
            )}
          </div>
        )}
    </div>
  );
}
export default Mainpage;
