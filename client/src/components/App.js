import ProductList from './ProductList/ProductList';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Layout, Container } from './Layout.styled';

import data from 'data/productList.json';

console.log(data);
const App = () => {
  return (
    <Layout>
      <header>
        <Container>
          {' '}
          <div>MIR electro</div>
        </Container>
      </header>
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
