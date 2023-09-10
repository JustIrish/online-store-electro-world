import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  height: 60px;
  padding: 18px 60px 18px 25px;
  border-radius: 3px 0px 0px 3px;
  border: 1px solid #a19c97;
  border-right: 0;
  outline: none;
  color: #b9b6b3;
  font-size: 20px;
  background-color: transparent;
`;

export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  padding: 0;
  border-radius: 0px 3px 3px 0px;
  border: 1px solid #a19c97;
  border-left: 0;
  background-color: transparent;

  cursor: pointer;
  outline: none;
`;
