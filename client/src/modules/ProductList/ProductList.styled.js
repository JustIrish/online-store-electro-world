import styled from 'styled-components';

export const CardList = styled.ul`
  display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  column-gap: 51px;
  row-gap: 60px;
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 380px;
  padding: 30px 44px;
  background-color: ${({ theme: { colors } }) => colors.bg};
  border-radius: 6px;
  box-shadow: 0px 0px 15px 0px rgba(152, 136, 122, 0.5);
`;
