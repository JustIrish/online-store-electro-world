import styled from 'styled-components';

export const Section = styled.section`
  padding: 47px 0px 49px;
  background-color: ${({ theme: { colors } }) => colors.bg};
`;

export const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
`;

export const TitleWrap = styled.div`
  max-width: 740px;
`;

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
  font-size: 22px;
`;
