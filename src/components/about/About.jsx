import "./about.css";
import Abt from '../../img/about.jpg'
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Abt}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         Web Developer
        </p>
        <p className="a-desc">
        Responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications. Strive to create visually appealing sites that feature user-friendly design and clear navigation.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Design Awards 2022</h4>
            <p className="a-award-desc">
            Strive to create visually appealing sites that feature user-friendly design and clear navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
