import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

import { CardList, ImageStyled, Descr, ItemTitle } from './ProductList.styled';

const ProductList = ({ array = [] }) => {
  return (
    <CardList>
      <li
        style={{ position: 'relative', gridColumnStart: 1, gridColumnEnd: 3 }}
      >
        <ImageStyled
          src={require(`images/kitchen.jpg`)}
          alt="kitchen"
          width="817"
          height="380"
          loading="lazy"
        />
        <Descr>Хiти цього року</Descr>
        <ItemTitle>Все для кухні</ItemTitle>
      </li>
      {array.map(product => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
      <li
        style={{ position: 'relative', gridColumnStart: 3, gridColumnEnd: 5 }}
      >
        <ImageStyled
          src={require(`images/kitchen-appliances-sets.jpg`)}
          alt="kitchen sets"
          width="817"
          height="380"
          loading="lazy"
        />
        <Descr>Комплекти</Descr>
        <ItemTitle>Набори технiки</ItemTitle>
      </li>
    </CardList>
  );
};

ProductList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;
