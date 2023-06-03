import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.styled';

const { List, Item, Label, Button } = css;

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Label>
          {name}: {number}
        </Label>
        <Button
          type='button'
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          Delete
        </Button>
      </Item>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
