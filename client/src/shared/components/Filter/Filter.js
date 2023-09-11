import PropTypes from 'prop-types';

import {
  FilterWrap,
  FilterTitle,
  FilterOptions,
  ArrowBottom,
} from './Filter.styled';

const Filter = ({ title, options }) => {
  return (
    <FilterWrap>
      <FilterTitle>{title}:</FilterTitle>
      <FilterOptions>
        {options}
        <ArrowBottom />
      </FilterOptions>
    </FilterWrap>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
};

export default Filter;
