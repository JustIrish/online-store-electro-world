import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const StyledInput = styled.input`
  width: 380px;
  height: 64px;
  padding: 19px;
  border-radius: 6px;
  border: 1px solid ${({ theme: { colors } }) => colors.accent};

  outline: none;
  color: ${({ theme: { colors } }) => colors.accent};
  font-size: 16px;
  background-color: #fff;
  text-align: center;
`;

export const ErrorStyled = styled.div`
  margin-top: 4px;
  padding: 0 15px;
  color: #ff2b77;
  text-align: right;
  font-size: 12px;
  line-height: 1.3;
`;

export const StyledBtn = styled.button`
  position: relative;
  display: inline-block;
  padding: 0;
  cursor: pointer;
  color: inherit;
  border-color: transparent;
  background-color: transparent;
  font-family: 'Sansation Regular';
  font-size: 18px;
  font-weight: 700;
  text-decoration-line: underline;
  margin-right: 6px;
`;
