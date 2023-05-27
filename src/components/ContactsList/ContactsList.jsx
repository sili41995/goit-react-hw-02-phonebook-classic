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

export default ContactsList;
