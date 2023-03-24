import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {

    return (
        <CompactCard param={props} />
    )
}

function CompactCard({ param }) {
    return (
        <div className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <span>{param.value}</span>
                <span>Last 24 Hours</span>
            </div>
        </div>
    )
}

export default Card
