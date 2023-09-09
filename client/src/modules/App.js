import { GlobalStyle } from 'shared/styles/GlobalStyle';

import Container from 'shared/components/Container/Container';
import NavBar from './NavBar/NavBar';
import Catalog from './Catalog/Catalog';
import Hero from './Hero/Hero';

import { Layout, Header, Footer } from './Layout.styled';

import data from 'data/productList.json';

const App = () => {
  return (
    <Layout>
      <Header>
        <Container>
          <NavBar />
        </Container>
      </Header>
      <main>
        <Hero />
        <Container>
          <Catalog array={data} />
        </Container>
      </main>
      <Footer>
        <Container>
          <NavBar />
        </Container>
      </Footer>
      <GlobalStyle />
    </Layout>
  );
};

export default App;
