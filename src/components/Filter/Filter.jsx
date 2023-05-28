import PropTypes from 'prop-types';
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

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
