import { nanoid } from 'nanoid';

const Filter = ({ filterValue, onChangeFilter }) => {
  const filterInputId = nanoid();
  return (
    <div>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        type='text'
        id={filterInputId}
        onChange={onChangeFilter}
        value={filterValue}
      />
    </div>
  );
};

export default Filter;
