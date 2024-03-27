
// import { useId } from "react";
import css from "./ContactForm.module.css"

const ContactForm = ({ onContact }) => {
  // const loginId = useId();
  // const passwordId = useId();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt)

    // Викликаємо пропс onContact
    onContact({
      id: Date.now(),
      name: evt.target.elements.login.value,
      number: evt.target.elements.number.value,
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.submitForm}>
      <label>Name</label>
      <input type="text" name="login" />
      <label>Number</label>
      <input type="number" name="number" />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;