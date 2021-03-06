import "./About.css";
import Award from "../../img/bootstarp.png";
import Award3 from "../../img/React.png";
import Award2 from "../../img/certificate.jpg";
import Award4 from "../../img/React_Native.png";
import React from "react";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={Award2}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    
                </p>
                <p className="a-desc">
                Passion is the first thought that comes to mind when you ask me about Front-End Development or coding. The second thought is stubborn. Why stubborn? Well, coding brings out a determination in me that does not want to stop unit my brain finds a way to compile the right code to fix a problem. Determination and honesty are two skills that make a huge difference in any project.
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h5 className="a-award-title">Front-End Web and Mobile Development: Bootstrap Jul-Dec 2021</h5>
                        <p className="a-award-desc">
                            Full stack web and Mobile App. 5 Week Bootstarp Completion
                        </p>
                    </div>
                </div>
                <div className="a-award">
                    <img src={Award3} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h5 className="a-award-title">Front-End Web and Mobile Development: React Jul-Dec 2021</h5>
                        <p className="a-award-desc">
                            Full stack web and Mobile App. 5 Week React Completion
                        </p>
                    </div>
                </div>
                <div className="a-award">
                    <img src={Award4} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h5 className="a-award-title">Front-End Web and Mobile Development: React-Native Jul-Dec 2021</h5>
                        <p className="a-award-desc">
                            Full stack web and Mobile App. 4 Week React-Native Completion
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;