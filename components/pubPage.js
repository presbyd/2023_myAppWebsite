import React from "react";
import Card2 from "./Card2";
import contacts from "./contacts";
import NavBurg from "./NavBurg";
import Footer from "./Footer";
import EmblaCarousel from './Carousel'


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
            <h1 className="heading">Publications</h1>

            <hr></hr>
            <h2 className="h2-year"> 2024 </h2>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2024).map(createCard)}
            </div>

            <hr></hr>
            <h2 className="h2-year"> 2023 </h2>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2023).map(createCard)}
            </div>

            <hr></hr>
            <h2 className="h2-year"> 2022 </h2>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2022).map(createCard)}
            </div>

            <hr></hr>
            <h2 className="h2-year"> 2021 </h2>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2021).map(createCard)}
            </div>
            {/* <div>
                <EmblaCarousel>
                    {contacts.filter(obj => obj.year == 2021).map(createCard)}
                </EmblaCarousel>
            </div> */}

            <hr></hr>
            <h2 className="h2-year"> 2020 </h2>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2020).map(createCard)}
            </div>

            <hr></hr>
            <h2 className="h2-year"> 2019 </h2>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2019).map(createCard)}
            </div>

            <hr></hr>
            <h2 className="h2-year"> 2018 </h2>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2018).map(createCard)}
            </div>

            <hr></hr>
            <h2 className="h2-year"> 2017 </h2>
            <div className="d-flex flex-wrap">
                {contacts.filter(obj => obj.year == 2017).map(createCard)}
            </div>

            <Footer />
        </>
    )
}

export default PubPage;
