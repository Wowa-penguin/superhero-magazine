import { useState } from "react";
import { Navbar, Start } from "./components/index";
import { styles } from "./styles";

const App = () => {
  const [start, setStart] = useState(false);
  const [start1, setStart1] = useState(false);
  const [start2, setStart2] = useState(false);
  const [start3, setStart3] = useState(false);

  const click = () => {
    setStart(!start);
  };
  const click1 = () => {
    setStart1(!start1);
  };
  const click2 = () => {
    setStart2(!start2);
  };
  const click3 = () => {
    setStart3(!start3);
  };

  return (
    <>
      <div className="relative z-0">
        <Navbar
          onClick1={click}
          onClick2={click1}
          onClick3={click2}
          onClick4={click3}
        />
        <div className="bg-nav-pattern bg-cover bg-no-repeat bg-center">
          <section className={`relative h-[455px] mx-auto`}>
            <div className="absolute inset-0 top-7">
              <div className={`${styles.normalText}`}>
                <Start
                  Chronicle={start}
                  Unbreakable={start1}
                  Super={start2}
                  Watchmen={start3}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
