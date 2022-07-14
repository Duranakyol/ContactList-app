import React from 'react'
import Form from './Form'
import List from './List'
import "../styles.css";
import { useState, useEffect } from 'react';

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Duran",
      phone_number: "123456"
    },
    {
      fullname: "Mehmet",
      phone_number: "987654"
    },
    {
      fullname: "Kadir",
      phone_number: "18341834"
    },
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
      <div id="container">
            <h1>CONTACTS</h1>
            <List contacts={ contacts } />
            <Form addContact={setContacts} contacts={contacts} />
      </div>
    
  )
}

export default Contacts