import styled from 'styled-components';

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 380px);
  grid-template-rows: repeat(3, 435px);
  column-gap: 51px;
  row-gap: 60px;
`;

export const ImageStyled = styled.img`
  border-radius: 6px;
  box-shadow: 0px 0px 15px 0px rgba(152, 136, 122, 0.5);
`;

export const Descr = styled.p`
  position: absolute;
  bottom: 57px;
  right: 0;
  padding: 22px 48px;
  border-radius: 0px 0px 8px 0px;
  opacity: 0.85;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  background-color: ${({ theme: { colors } }) => colors.accent};
  backdrop-filter: blur(20px);
`;

export const ItemTitle = styled.p`
  margin-top: 30px;
  font-size: 22px;
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

export const DescWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Title = styled.p`
  font-size: 22px;
`;

export const Price = styled.p`
  font-size: 22px;
  color: ${({ theme: { colors } }) => colors.accent};
`;
