import "./about.scss";
import GetAppIcon from "@material-ui/icons/GetApp";
import painting from "../../images/merlyn.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__content wrapper ">
        <div className="box-text">
          <h2 className="title">
            Kim
            <br /> jestem?
          </h2>
          <p className="description">
            Parę lat tamu na rozdaniu dyplomów Rektor Politechniki zachęcał młodych inżynierów aby w przyszłości byli bardziej artystami niż rzemieślnikami. W moim życiu świat techniczny przeplata się
            ze światem artystycznym. Na co dzień zmagam się z zagadnieniami konstrukcyjnymi w rzeczywistości trójwymiarowej, ale gdy tylko jest możliwość biorę aparat do ręki i chwytam życie w 1/100
            sekundy. Fotografia uczy mnie dostrzegać rzeczy z innej perspektywy. Uwielbiam poznawać nowych ludzi, nowe miejsca i zapisywać historie - czy to na nośniku cyfrowym, czy na płótnie.
          </p>
          <div className="button">
            <a className="button__download  buttons" href="https://drive.google.com/file/d/1hIRc2UfEJkeO5l9iqB1q599Y25GcMJ5n/view" target="_blank" rel="noreferrer">
              CV
              <GetAppIcon className="button__download--icon" />
            </a>
          </div>
        </div>

        <div className="box-img">
          <img src={painting} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
