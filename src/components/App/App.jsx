import { Component } from 'react';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';

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

  addContact = (contact) => {
    const contacts = this.state.contacts;
    const contactName = contact.name;
    const contactIndex = contacts.findIndex(({ name }) => name === contactName);
    if (!!~contactIndex) {
      alert(`${contactName} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  onChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  filterContacts = (value) => {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = value.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleteContact = (id) => {
    this.setState(({ contacts }) => {
      const updateContacts = contacts.filter(
        ({ id: contactId }) => contactId !== id
      );
      return { contacts: updateContacts };
    });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts(filter);

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeInput={this.onChangeInput} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
