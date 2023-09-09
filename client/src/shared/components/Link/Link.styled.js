import styled from 'styled-components';

import { ReactComponent as SvgArrow } from 'images/svg/arrow.svg';
import { ReactComponent as SvgEllipse } from 'images/svg/ellipse.svg';

export const StyledLink = styled.a`
  position: relative;
  display: inline-block;
  color: inherit;
  font-family: 'Sansation Regular';
  font-size: 18px;
  font-weight: 700;
  text-decoration-line: underline;
  margin-right: 6px;

  /* &::before {
    content: '';
    position: absolute;
    top: -13px;
    left: -20px;
    width: 50px;
    height: 50px;

    border: 2px solid ${({ theme: { colors } }) => colors.secondaryTxt};
    border-radius: 50%;
  } */
`;

export const Arrow = styled(SvgArrow)`
  width: 36px;
`;

export const Ellipse = styled(SvgEllipse)`
  position: absolute;
  top: -15px;
  left: -20px;
  width: 36px;
`;
