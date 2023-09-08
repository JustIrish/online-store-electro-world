import { useState } from 'react';
import { ImSearch } from 'react-icons/im';

import toast from 'react-hot-toast';

import { SearchForm, SearchInput, SearchBtn } from './SearchBar.styled';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handlerSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      toast.error('Please, enter your query!');
    }
    toast.success(`${query}`);
  };

  return (
    <SearchForm onSubmit={handlerSubmit}>
      <SearchInput
        type="text"
        name="input"
        value={query}
        placeholder="Ваш запит"
        onChange={e => setQuery(e.target.value)}
      />
      <SearchBtn type="submit">
        <ImSearch size={28} color="#98887A" />
      </SearchBtn>
    </SearchForm>
  );
};

export default SearchBar;
