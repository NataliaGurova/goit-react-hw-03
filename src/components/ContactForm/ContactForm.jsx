
import { useId } from "react";
import css from "./ContactForm.module.css"

const ContactForm = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
    const form = evt.target;
    const { login, number } = form.elements;

    // Викликаємо пропс onLogin
    onLogin({
      login: login.value,
      password: number.value,
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.submitForm}>
      <label htmlFor={loginId}>Name</label>
      <input type="text" name="login" />
      <label htmlFor={passwordId}>Number</label>
      <input type="number" name="number" />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;