import React from "react";
import "./Intro.css";
// import Me from "../../img/me.png";

function intro() {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 claasName="i-intro">Hello, my name is</h2>
                    <h2 className="i-name">Erick Garcia</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Front end Developer</div>
                            <div className="i-title-item">Bootstrap</div>
                            <div className="i-title-item">React</div>
                            <div className="i-title-item">React Native</div>
                            <div className="i-title-item">HTML5 CSS JavaScript</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I design and develop services for clients of all sizes, specializing in responsive and modern websites across all types of screen sizes.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                {/* <img src={me} alt="" className="i-img" /> */}
            </div>
        </div>
    )
}

export default intro
