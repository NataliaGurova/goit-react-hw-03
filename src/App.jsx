
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useId, useState } from 'react'
import './App.css'
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import contacts from './data/contacts.json'

function App() {
  // const [count, setCount] = useState(0)
  // Колбек-функція для обробки сабміту форми
  const handleNewContact = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);

//  const loginId = useId();
//   const passwordId = useId();
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const [inputValue, setInputValue] = useState("");
//      setInputValue(evt.target.value);
//     const id = useId();
//     console.log(evt);
//     const form = evt.target;
//     const { login, number } = form.elements;

//     // Викликаємо пропс onLogin
//     onLogin({
//       login: login.value,
//       password: number.value,
//     });

//     form.reset();
//   };



  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>

      {/* Передаємо колбек як пропс форми */}
      <ContactForm onNewContact={handleNewContact} />
      </div>

      <SearchBox />
      <ContactList contacts={contacts} />
</div>
  )
}

export default App
