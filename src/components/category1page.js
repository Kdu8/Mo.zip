import category1 from "./css/category1.module.css";
import Mainheader from "./mainheader";
import Postbox from "./postbox";
import main from "./css/main.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const BOARD_URL = "https://api.mo-zip.online/boards?category=Sports";
const SERVER_URL = "https://api.mo-zip.online/users/me";

function Category1page() {

  const [boardlist, setBoardList] = useState([]);
  //const [board, setBoard] = useState("");
  useEffect(()=>{
    axios.get(BOARD_URL, {withCredentials: true})
    .then((res) => {
      setBoardList(res.data);
    })
  }, []);

  
  // useEffect(() => {
  //   axios
  //     .get(BOARD_URL, { withCredentials: true })
  //     .then((res) => {
  //       console.log(res.data);
  //       res.data.map((ele) => {
  //         console.log(ele);
  //         setBoard(ele);
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

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
    <div className={category1.main}>
      <Mainheader user={user} />
      {boardlist.map((ele)=>{
        return (
          <Postbox board={ele}/>
        )
      })}
      <Link to={`/category1`}>
        <button className={category1.category1}>운동</button>
      </Link>
      <Link to={`/category2`}>
        <button className={category1.category2}>프로젝트</button>
      </Link>
      <Link to={`/category3`}>
        <button className={category1.category3}>공동구매</button>
      </Link>
      <h1 className={main.find}>
        내가 찾던 파트너와
        <br />
        함께하세요!
      </h1>
      <Link to={`/write`}>
        <button className={main.btn}>Mo.zip 하기</button>
      </Link>
    </div>
  );
}
export default Category1page;

category1.prototype = {
  exDate:  PropTypes.arrayOf(PropTypes.string).isRequired,
}
