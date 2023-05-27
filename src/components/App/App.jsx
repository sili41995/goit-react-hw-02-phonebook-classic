import './App.css';
import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContactToContacts = (userInfo) => {
    const { contacts } = this.state;
    const { name: userName } = userInfo;
    const isContact = contacts.some(
      ({ name: contactName }) => contactName === userName
    );

    if (isContact) {
      alert(`${userName} is already in contacts.`);
      return;
    }

    const contact = { ...userInfo, id: nanoid() };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  deleteContactFromContacts = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        ({ id: contactId }) => contactId !== id
      ),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.addContactToContacts} />

        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          onChangeFilter={this.changeFilter}
        />
        <ContactsList
          contactsArray={filteredContacts}
          onDeleteBtnClick={this.deleteContactFromContacts}
        />
      </div>
    );
  }
}

export default App;
