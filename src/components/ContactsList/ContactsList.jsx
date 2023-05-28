import PropTypes from 'prop-types';
import css from 'components/ContactsList/ContactsList.styled';

const { List, Item, ItemLabel, ItemButton } = css;

const ContactsList = ({ contactsArray, onDeleteBtnClick }) => {
  return (
    <List>
      {contactsArray.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ItemLabel>
              {name}: {number}
            </ItemLabel>
            <ItemButton
              type='button'
              onClick={() => {
                onDeleteBtnClick(id);
              }}
            >
              Delete
            </ItemButton>
          </Item>
        );
      })}
    </List>
  );
};

ContactsList.propTypes = {
  contactsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteBtnClick: PropTypes.func.isRequired,
};

export default ContactsList;
