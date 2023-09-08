import ProductList from './ProductList/ProductList';
import { GlobalStyle } from 'shared/styles/GlobalStyle';
import { Layout, Header, Container } from './Layout.styled';

import data from 'data/productList.json';
import NavBar from './NavBar/NavBar';

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
          <ProductList array={data}></ProductList>
        </Container>
      </main>
      <footer></footer>
      <GlobalStyle />
    </Layout>
  );
};

export default App;
