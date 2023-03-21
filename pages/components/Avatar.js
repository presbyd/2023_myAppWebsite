import React from "react";

function Avatar(props) {
    return (<a href={props.link}>
        <img className="circle-img" src={props.img} alt="avatar_img" />
    </a>);
}

export default Avatar;
