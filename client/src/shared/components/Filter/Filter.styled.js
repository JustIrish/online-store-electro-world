import styled from 'styled-components';

import { ReactComponent as SvgArrow } from 'images/svg/arrow-bottom.svg';

export const FilterWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.p`
  font-size: 18px;
  margin-right: 12px;
`;

export const FilterOptions = styled.div`
  font-size: 18px;
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
`;

export const ArrowBottom = styled(SvgArrow)`
  width: 16px;
`;
