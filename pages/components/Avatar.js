import React from "react";
import Link from "next/link";
import Image from "next/image";

function Avatar(props) {
    return (<a href={props.link}>
        <img className="circle-img" src={props.img} alt="avatar_img" />
    </a>);
}

export default Avatar;
