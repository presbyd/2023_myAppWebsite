import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import NavBurg from "./NavBurg";


function createCard(contact) {
    return (
        <Card
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            link={contact.link}
            aut={contact.aut}
            descr={contact.descr}
        />
    );
}

function App() {
    return (
        <div>
            <NavBurg />
            <h1 className="heading">My Publications</h1>
            {contacts.map(createCard)}
        </div>
    );
}

export default App;
