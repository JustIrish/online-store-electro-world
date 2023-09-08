import ProductCard from './ProductCard';

import { CardList } from './ProductList.styled';

const ProductList = ({ array = [] }) => {
  return (
    <CardList>
      <li>
        <img
          src={require(`images/kitchen.jpg`)}
          alt="kitchen"
          width="817"
          loading="lazy"
        />
        <p>Все для кухні</p>
      </li>
      {array.map(product => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
      <li>
        <img
          src={require(`images/kitchen-appliances-sets.jpg`)}
          alt="kitchen sets"
          width="817"
          loading="lazy"
        />
        <p>Набори техніки</p>
      </li>
    </CardList>
  );
};

export default ProductList;
