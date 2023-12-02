import propTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useState } from 'react';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    const form = e.target;
    e.preventDefault();
    onSubmit({ name: name, number: number });
    form.reset();
  };

  const handleChangeName = e => {
    const name = e.target.value;
    setName(name);
  };
  const handleChangeNumber = e => {
    const number = e.target.value;
    setNumber(number);
  };

  return (
    <div className={css.contactFormWrapper}>
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label className={css.contactFormItem}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChangeName}
          />
        </label>
        <label className={css.contactFormItem}>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            value={number}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChangeNumber}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};



