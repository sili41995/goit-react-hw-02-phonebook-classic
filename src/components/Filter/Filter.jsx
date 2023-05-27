import { nanoid } from 'nanoid';
import css from 'components/Filter/Filter.styled';

const { FilterContainer, FilterLabel, FilterInput } = css;

const Filter = ({ filterValue, onChangeFilter }) => {
  const filterInputId = nanoid();
  return (
    <FilterContainer>
      <FilterLabel htmlFor={filterInputId}>Find contacts by name</FilterLabel>
      <FilterInput
        type='text'
        id={filterInputId}
        onChange={onChangeFilter}
        value={filterValue}
      />
    </FilterContainer>
  );
};

export default Filter;
