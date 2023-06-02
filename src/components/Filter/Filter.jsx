import { nanoid } from 'nanoid';

const Filter = ({ value, onChangeInput }) => {
  const filterInputId = nanoid();

  return (
    <>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        type='text'
        id={filterInputId}
        value={value}
        onChange={onChangeInput}
        name='filter'
      />
    </>
  );
};
export default Filter;
