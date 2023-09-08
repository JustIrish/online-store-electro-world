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
  font-family: 'Sansation Regular';
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.009;
  letter-spacing: 1px;
  background-color: ${({ theme: { colors } }) => colors.accent};
  backdrop-filter: blur(20px);
`;

export const ItemTitle = styled.p`
  margin-top: 30px;
  font-size: 22px;
`;

export const Card = styled.li``;

export const ImageWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 380px;
  padding: 30px 44px;
  background-color: ${({ theme: { colors } }) => colors.bg};
  border-radius: 6px;
  box-shadow: 0px 0px 15px 0px rgba(152, 136, 122, 0.5);
  transition: border 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

  ${Card}:hover &,
  ${Card}:focus {
    border: 3px solid rgba(152, 136, 122, 0.8);
  }
`;

export const DescWrap = styled.div`
  display: flex;

  align-items: flex-start;
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

export const OldPrice = styled.p`
  font-size: 19px;
  text-decoration: line-through;
  color: #c4c4c4;
`;

export const Mark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-family: 'Sansation Regular';
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.009;
  letter-spacing: 1px;
  border-radius: 0px 7px 0px 0px;
  opacity: 0.85;
  padding: 13px 18px;
  background-color: ${({ theme: { colors } }) => colors.accent};
  backdrop-filter: blur(20px);

  ${Card}:hover &,
  ${Card}:focus {
    border-radius: 0px 3px 0px 0px;
  }
`;
