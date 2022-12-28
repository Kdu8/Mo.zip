import Mainheader from "./mainheader";
import postpage from "./css/postpage.module.css";
export default function Postpage(){
    return(
        <div className={postpage.body}>
        <Mainheader />
        <div className={postpage.postcontainer}>
            
        </div>
        </div>
    );
}