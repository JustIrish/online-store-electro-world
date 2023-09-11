import styled from 'styled-components';

export const Layout = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  position: relative;
  z-index: 5;
  padding: 33px 0px;
  background-color: ${({ theme: { colors } }) => colors.bg};
`;

export const Footer = styled.footer`
  padding: 88px 0px 112px;
`;
