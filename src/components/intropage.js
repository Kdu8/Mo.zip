import { Link } from "react-router-dom";
import intro from "./css/intro.module.css";
import logo from "./img/logo.png";
import box from "./img/box.png";
import 사람1 from "./img/사람1.png";
import 사람2 from "./img/사람2.png";
import 사람3 from "./img/사람3.png";
import develop from "./img/develop.png";
import run from "./img/run.png";
import meet from "./img/meet.png";
import Mozipmacbook from "./img/Mozip-macbook.png";
import Mozipdesktop from "./img/Mo.zip-desktop.png";
import Fade from "react-reveal/Fade";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SERVER_URL = "https://api.mo-zip.online/users/me";
function Inview() {
  const replace = useNavigate();

  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get(SERVER_URL, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUser(res);
        replace(`/main`);
      })
      .catch((err) => {
        console.log(err);
        alert("유저 정보 X");
      });
  }, []);

  return (
    <div className={intro.body}>
      <header className={intro.header}>
        <div className={intro.inner}>
          <Link to={`/intro`} className={intro.logo}>
            <img src={logo} alt="Mo.zip" className={intro.logo} />
          </Link>
          <div className={intro.join}>
            <Link to={`/login`}>
              <div className={intro.login}>Log In</div>
            </Link>
            <Link to={`/signup`}>
              <div className={intro.signup}>Sign Up</div>
            </Link>
          </div>
        </div>
      </header>

      <section className={intro.visual}>
        <section className={intro.box1}>
          <div className={intro.inner}>
            <div className={intro.contents1}>
              <h1 className={intro.title}>Get together!</h1>
              <p className={intro.explanation}>
                Mo.zip에서 내가 찾던 파트너와 함께 하세요
              </p>
              <Link to={`login`}>
                <button className={intro.start}>시작하기</button>
              </Link>
            </div>
            <img src={meet} alt="Mo.zip" className={intro.image} />
          </div>
        </section>

        <div className={intro.width}>
          <div className={intro.xbox}>
            <section className={intro.box2}>
              <div className={intro.inner}>
                <div className={intro.contents2}>
                  Mo.zip으로 나와 딱 맞는 "우리"를 만나보세요
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className={intro.box3}>
          <div className={intro.inner}>
            <div className={intro.pgroup}></div>
            <div className={intro.grop}>
              <div className={intro.partner}>
                <Fade bottom>
                  <div className={intro.partner1}>
                    <img src={run} alt="운동하는 사람" className={intro.run} />
                    <h2 className={intro.runh2}>운동 파트너</h2>
                    <p className={intro.runp}>
                      축구, 배드민턴 등 다양한
                      <br />
                      운동을 나와 맞는 운동 파트너와
                      <br />
                      함께 즐겨보세요.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            <div className={intro.grop}>
              <div className={intro.partner}>
                <Fade bottom>
                  <div className={intro.partner2}>
                    <img
                      src={develop}
                      alt="공부하는 사람"
                      className={intro.develop}
                    />
                    <h2 className={intro.developh2}>협업 파트너</h2>
                    <p className={intro.developp}>
                      프로젝트를 진행할 때 나와 맞는 팀원들과 협업을 진행해 멋진
                      결과물을 만들어보세요.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            <div className={intro.grop}>
              <div className={intro.partner}>
                <Fade bottom>
                  <div className={intro.partner3}>
                    <img src={box} alt="택배상자" className={intro.box} />
                    <h2 className={intro.boxh2}>공동구매를 원하는</h2>
                    <p className={intro.boxp}>
                      원하는 상품을 여러사람들과 함께 구매해 합리적인 소비를
                      해보세요.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>

        <div className={intro.width}>
          <div className={intro.xbox}>
            <section className={intro.box4}>
              <div className={intro.inner}>
                <div className={intro.contents3}>
                  지금 우리에게 필요한 "함께"
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className={intro.box5}>
          <div className={intro.inner}>
            <div className={intro.grop}>
              <div className={intro.partner}>
                <Fade bottom>
                  <div className={intro.ex1}>
                    <img src={사람1} alt="사람1" className={intro.사람1} />
                    <div className={intro.card1}>
                      <p className={intro.text1}>
                        " 함께 모집 관련 프로젝트를 진행할 파트너를 <br />
                        찾고 있어요. 함께 멋진 사이트를 만들어요! "
                      </p>
                      <div className={intro.condition}>요구조건</div>
                      <p className={intro.cardtext1}>
                        git을 능동적으로 사용할 줄 아는 팀원과 함께 하고싶어요.
                        <br />이 프로젝트에서 React를 사용하고 싶어요.
                        <br />
                        React를 잘 다룰 줄 아는 분이면 좋겠어요!
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>

            <div className={intro.grop}>
              <div className={intro.partner}>
                <Fade bottom>
                  <div className={intro.ex2}>
                    <img src={사람2} alt="사람2" className={intro.사람2} />
                    <div className={intro.card2}>
                      <p className={intro.text2}>
                        " 오늘 저녁 시간에 축구할 멋진 친구들을 찾아요! "
                      </p>
                      <div className={intro.condition}>요구조건</div>
                      <p className={intro.cardtext2}>
                        축구를 할 수 있는 건강한 몸과 발만 있으면 돼요.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>

            <div className={intro.grop}>
              <div className={intro.partner}>
                <Fade bottom>
                  <div className={intro.ex3}>
                    <img src={사람3} alt="사람3" className={intro.사람3} />
                    <div className={intro.card3}>
                      <p className={intro.text3}>
                        " 과자 공동구매 하실 분을 찾아요 "
                      </p>
                      <div className={intro.condition}>요구조건</div>
                      <p className={intro.cardtext3}>모두 환영이에요!!</p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>
        <section className={intro.box6}>
          <div className={intro.inner}>
            <p className={intro.findtext}>Find the perfect partner for you</p>
          </div>
        </section>

        <section className={intro.box7}>
          <div className={intro.inner}>
            <img src={Mozipdesktop} alt="dektop" className={intro.desktop} />
            <img src={Mozipmacbook} alt="macbook" className={intro.macbook} />
          </div>
        </section>
      </section>
    </div>
  );
}

export default Inview;
