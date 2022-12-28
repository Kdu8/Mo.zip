import Mainheader from "./mainheader";
import postpage from "./css/postpage.module.css";
import postarrow from "./img/postarrow.png";
import postgo from "./img/golist.png";
export default function Postpage(){
    return(
        <div className={postpage.body}>
        <Mainheader />
        <div className={postpage.postcontainer}>
            <p className={postpage.title}>제목</p>
            <p className={postpage.name}>작성자: 한준</p>
            <p className={postpage.exDate}>마감일 : yyyy/mm/dd</p>
            <p className={postpage.maxApp}>모집인원 : 2</p>
            <p className={postpage.content}>어쩌고 저쩌고 막 글 내용 있고 모집 내용 있고 쏼라 쏼라 ㅂ럽럽ㄹ바럽러바ㅓㄹ바라ㅓㄹ버라바버랍ㄼ러바ㅓ라버라버ㅏ버라ㅓ바ㅓ랍러ㅏ버랍러ㅏ버라버라버라버ㅏ버라버ㅏ버라버라버라버라버라버라버ㅏ버라버라버라버라버ㅏ버</p>
            <p className={postpage.need}>요구조건</p>
            <div className={postpage.userslist}>
                <p className={postpage.nowlist}>신청목록이 궁금하신가요?</p>
                <p className={postpage.golist}>신청자 목록 보러가기 <img src={postarrow} alt="golist" className={postpage.arrow}/></p>
                <img src={postgo} alt="?" className={postgo.gogo}/>
            </div>
        </div>
        </div>
    );
}