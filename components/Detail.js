import React from "react";

function Detail(props) {
    return <p className="info">{[props.aut_or_descr, props.detailInfo]}</p>;
}

export default Detail;