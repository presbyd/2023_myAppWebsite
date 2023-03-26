import React from "react";
import Card2 from "./Card2";
import contacts from "./contacts";
import NavBurg from "./NavBurg";
import Footer from './Footer';



function createCard(contact) {
    return (
        <Card2
            key={contact.id}
            name={contact.name}
            year={contact.year}
            img={contact.imgURL}
            link={contact.link}
            aut={contact.aut}
            descr={contact.descr}
        />
    );
}


function PubPage() {
    return (
        <>
            <NavBurg />
            <h1 className="heading">My Publications</h1>

            <h2 className="h2-year"> 2023 </h2>
            <hr></hr>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2023).map(createCard)}
            </div>

            <h2 className="h2-year"> 2022 </h2>
            <hr></hr>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2022).map(createCard)}
            </div>

            <h2 className="h2-year"> 2021 </h2>
            <hr></hr>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2021).map(createCard)}
            </div>

            <h2 className="h2-year"> 2020 </h2>
            <hr></hr>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2020).map(createCard)}
            </div>

            <h2 className="h2-year"> 2019 </h2>
            <hr></hr>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2019).map(createCard)}
            </div>

            <h2 className="h2-year"> 2018 </h2>
            <hr></hr>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2018).map(createCard)}
            </div>

            <h2 className="h2-year"> 2017 </h2>
            <hr></hr>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2017).map(createCard)}
            </div>

            <Footer />
        </>
    )
}

export default PubPage;
