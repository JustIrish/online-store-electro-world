import styled from 'styled-components';

import { Element } from 'react-scroll';

export const Section = styled(Element)`
  padding: 47px 0px 49px;
  background-color: ${({ theme: { colors } }) => colors.bg};
`;

export const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
`;

export const TitleWrap = styled.div`
  max-width: 770px;
`;

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
  font-size: 22px;
`;
