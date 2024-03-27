
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import initialContacts from './data/contacts.json'

function App() {
  const [contacts, setContacts] = useState(initialContacts)
  console.log(contacts);
  // Колбек-функція для обробки ContactForm сабміту форми
  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return ([
      ...prevContact,
      newContact
      ])
    })
    // Виконуємо необхідні операції з ContactForm даними
    console.log(newContact);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    })
console.log(contactId);
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>

      {/* Передаємо колбек як пропс форми */}
      <ContactForm onContact={addContact} />
      </div>

      <SearchBox />
      <ContactList contacts={contacts} onDelete={deleteContact} />
</div>
  )
}

export default App
