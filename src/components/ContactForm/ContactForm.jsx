import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from 'components/ContactForm/ContactForm.styled';

const { Form, FormInput, FormLabel, FormButton } = css;

class ContactForm extends Component {
  static defaultProps = {
    initialValue: '',
  };

  static propTypes = {
    state: PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  };

  state = {
    name: this.props.initialValue,
    number: this.props.initialValue,
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmitForm(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: this.props.initialValue,
      number: this.props.initialValue,
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormLabel htmlFor={this.nameInputId}>Name</FormLabel>
        <FormInput
          id={this.nameInputId}
          onChange={this.handleInputChange}
          value={name}
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <FormLabel htmlFor={this.numberInputId}>Number</FormLabel>
        <FormInput
          id={this.numberInputId}
          onChange={this.handleInputChange}
          value={number}
          type='tel'
          name='number'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
        />

        <FormButton type='submit'>Add contact</FormButton>
      </Form>
    );
  }
}

export default ContactForm;
