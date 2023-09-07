import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const Layout = styled.div`
  margin: 0 auto;
`;

// export const Main = styled.main`
//   padding: 40px 0;

//   ${mediaQueries('tablet')`
//     padding: 40px 0 125px;
//    `};

//   ${mediaQueries('desktop')`
//     padding: 60px 0 77px;
//     `};
// `;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  ${mediaQueries('mobile')`
    max-width: 320px;
    padding: 0 24px;`};

  ${mediaQueries('tablet')`
  max-width: 768px;
    padding: 0 40px;`};

  ${mediaQueries('desktop')`
    max-width: 1440px;
    padding: 0 120px;`};
`;
