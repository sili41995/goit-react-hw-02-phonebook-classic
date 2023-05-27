const ContactsList = ({ contactsArray, onDeleteBtnClick }) => {
  return (
    <ul>
      {contactsArray.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>
              {name}: {number}
            </span>
            <button
              type='button'
              onClick={() => {
                onDeleteBtnClick(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
