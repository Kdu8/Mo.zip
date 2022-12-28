
import Category2 from "./css/category1.module.css";
import Mainheader from "./mainheader";
import Postbox from "./postbox";
function category1page() {
  return (
    <div className={Category2.main}>
      <Mainheader />
      <Postbox />
    </div>
  );
}
export default category1page;
