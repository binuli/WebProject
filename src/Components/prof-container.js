import React from "react";
//importing stylesheet
import "./prof-container.scss";

function ProfContainer() {
  return (
    <div className="container">
      <div className="container__profile">
        {/* Profile-photo */}
        <div className="container__profile__photo">
            <img src="me.jpg" alt="profile pictute"></img>
        </div>

        {/* Text */}
        <div className="container__profile__text">
            <div className="container__profile__text__name">
               <p> Binuli Fernando</p>
            </div>

            <div className="container__profile__text__line2">
            <div className="container__profile__text__line2__recipes">
                <p>12 recipes</p>
            </div>

            <div className="container__profile__text__line2__subs">
                <p>223 subscribers</p>
            </div>
            </div>

            <div className="container__profile__text__description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at molestie nibh. Vestibulum porttitor.</p>
            </div>
        </div>

        {/* Buttons */}
        <div className="container__profile__buttons">
            <div className="container__profile__buttons__btn">

            </div>
        </div>
      </div>
    </div>
  );
}

export default ProfContainer;
