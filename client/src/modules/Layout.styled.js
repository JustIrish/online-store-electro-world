import styled from 'styled-components';

export const Layout = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 33px 0px;
  background-color: ${({ theme: { colors } }) => colors.bg};
`;

export const Footer = styled.footer`
  padding: 88px 112px;
`;
