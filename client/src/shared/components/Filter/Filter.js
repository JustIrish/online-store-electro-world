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

export default Filter;
