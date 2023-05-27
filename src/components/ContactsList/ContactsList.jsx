const ContactsList = ({ contactsArray }) => {
  return (
    <ul>
      {contactsArray.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>
              {name}: {number}
            </span>
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
