import { useState, useEffect } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedData = localStorage.getItem('contacts');
    const parsedData = JSON.parse(savedData);
    return (
      parsedData || [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  const handleChange = e => {
    const filter = e.target.value;
    setFilter(filter);
  };

  const handleSubmit = ({ name, number }) => {
    const randomId = uuidv4();
    const contactName = name;
    const contactNumber = number;
    const newContact = {
      id: randomId,
      name: contactName,
      number: contactNumber,
    };
    let contactList = [...contacts];

    if (
      contacts.findIndex(
        contact => contactName.toLowerCase() === contact.name.toLowerCase()
      ) === -1
    ) {
      contactList = [...contacts, newContact];
    } else {
      alert(`${name} is already in contacts.`);
    }
    setContacts(contactList);
  };

  const handleFilteredContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log(localStorage);
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.containerHeader}>Phonebook</h1>
      <h2>Add contact</h2>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactsList
        contacts={handleFilteredContacts()}
        handleDelete={deleteContact}
      />
    </div>
  );
};
