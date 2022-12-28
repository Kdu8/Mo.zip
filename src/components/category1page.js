
import category1 from "./css/category1.module.css";
import Mainheader from "./mainheader";
import Postbox from "./postbox";
import main from "./css/main.module.css";
import { Link } from "react-router-dom";

function Category1page() {
  
  return (
    <div className={category1.main}>
      <Mainheader />
      <h1 className={main.find}>
          내가 찾던 파트너와
          <br />
          함께하세요!
        </h1>
      <Link to={`/write`}>
          <button className={main.btn}>Mo.zip 하기</button>
        </Link>
      <Postbox />
    </div>
  );
}
export default Category1page;
