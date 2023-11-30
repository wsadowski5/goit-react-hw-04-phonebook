import { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';
import { Filter } from './Filter/Filter';
import css from "./App.module.css"

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = ({ name, number }) => {
    const randomId = uuidv4();
    const contactName = name;
    const contactNumber = number;
    const newContact = {
      id: randomId,
      name: contactName,
      number: contactNumber,
    };
    let contactList = [...this.state.contacts];

    if (
      this.state.contacts.findIndex(
        contact => contactName.toLowerCase() === contact.name.toLowerCase()
      ) === -1
    ) {
      contactList = [...this.state.contacts, newContact];
    } else {
      alert(`${name} is already in contacts.`);
    }

    this.setState({ contacts: contactList });
  };

  handleFilteredContacts = () => {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return filteredContacts;
  };



  deleteContact = id => {
    this.setState({ contacts: this.state.contacts.filter(contact=> contact.id !==id) });
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={css.container}>
        <h1 className={css.containerHeader}>Phonebook</h1>
        <h2>Add contact</h2>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactsList
          contacts={this.handleFilteredContacts()}
          handleDelete={this.deleteContact}
        />
      </div>
    );
  }
}
