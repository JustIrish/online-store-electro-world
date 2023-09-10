import { GlobalStyle } from 'shared/styles/GlobalStyle';

import Container from 'shared/components/Container/Container';
import NavBar from './NavBar/NavBar';
import Hero from './Hero/Hero';
import Catalog from './Catalog/Catalog';
import Subscription from './Subscription/Subscription';

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
        <Subscription />
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
