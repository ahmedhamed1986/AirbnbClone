import React from "react";
import img01 from "../images/img01.png"
import star from "../images/star.png"

export default function Card() {
    return(
        <div className="card">
            <img className="card-main-img" src={img01} alt="" />
            <div className="card--stats">
                <img src={star} alt="" className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) *</span>
                <span className="gray">USA</span>
            </div> 
            <p>
                Life lessons with Katie Zaferes
            </p>
            <p>
                <span className="bold">From $136</span> / person

            </p>

        </div>
    )
}