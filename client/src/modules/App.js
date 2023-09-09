import { GlobalStyle } from 'shared/styles/GlobalStyle';
import { Layout, Header, Container } from './Layout.styled';

import data from 'data/productList.json';
import NavBar from './NavBar/NavBar';
import Catalog from './Catalog/Catalog';

const App = () => {
  return (
    <Layout>
      <Header>
        <Container>
          <NavBar />
        </Container>
      </Header>
      <main>
        <Container>
          <Catalog array={data} />
        </Container>
      </main>
      <footer></footer>
      <GlobalStyle />
    </Layout>
  );
};

export default App;
