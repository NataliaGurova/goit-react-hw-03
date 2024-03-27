
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

const ContactList = ({contacts}) => { 
  console.log(contacts);
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            <Contact
              name={name}
              number={number}
              
            />
          </li>
        ))}
    </ul>
  )
}

export default ContactList;