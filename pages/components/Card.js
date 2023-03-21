import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import Link from "next/link";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <Avatar img={props.img} />
                <h2 className="name" >
                    <Link href={props.link}>
                        {props.name}
                    </Link>
                </h2>
            </div>
            <div className="bottom">
                <Detail detailInfo={props.aut} />
                <Detail detailInfo={props.descr} />
            </div>
        </div>
    );
}

export default Card;
