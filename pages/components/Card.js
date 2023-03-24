import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import Link from "next/link";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <Avatar img={props.img} />
                <h2 className="name">
                    <Link className="name" href={props.link}>
                        {props.name}
                    </Link>
                </h2>
            </div>
            <div className="bottom">
                <Detail aut_or_descr="Role: " detailInfo={props.aut} />
                <Detail aut_or_descr="Description: " detailInfo={props.descr} />
            </div>
        </div>
    );
}

export default Card;
