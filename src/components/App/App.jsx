import React, { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { nanoid } from 'nanoid';
import css from 'components/App/App.styled';

const { Container, Title, Subtitle } = css;
class App extends Component {
  state = {
    contacts: [],
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
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmitForm={this.addContactToContacts} />

        <Subtitle>Contacts</Subtitle>
        <Filter
          filterValue={this.state.filter}
          onChangeFilter={this.changeFilter}
        />
        <ContactsList
          contactsArray={filteredContacts}
          onDeleteBtnClick={this.deleteContactFromContacts}
        />
      </Container>
    );
  }
}

export default App;
