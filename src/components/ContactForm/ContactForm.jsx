import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from 'components/ContactForm/ContactForm.styled';

const { Form, Input, Label, Button } = css;

const INITIAL_STATE = {
  name: '',
  number: '',
};

const INITIAL_STATE = {
  name: '',
  number: '',
};
class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  id = {
    nameInputId: nanoid(),
    numberInputId: nanoid(),
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.resetForm();
    const formData = new FormData(e.target);
    const contact = { id: nanoid() };
    formData.forEach((value, key) => {
      contact[key] = value;
    });
    this.props.addContact(contact);
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  onChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { nameInputId, numberInputId } = this.id;
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.onFormSubmit}>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          id={nameInputId}
          value={name}
          onChange={this.onChangeInput}
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor={numberInputId}>Number</Label>
        <Input
          id={numberInputId}
          value={number}
          onChange={this.onChangeInput}
          type='tel'
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
        />
        <Button type='submit'>Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
