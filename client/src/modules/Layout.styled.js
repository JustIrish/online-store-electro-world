import styled from 'styled-components';

export const Layout = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 33px 0px;
  background-color: ${({ theme: { colors } }) => colors.bg};
`;

// export const Main = styled.main`
//   padding: 40px 0;`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1920px;
  padding: 0 120px;
`;
