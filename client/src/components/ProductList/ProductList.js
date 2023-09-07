import ProductCard from './ProductCard';

const ProductList = ({ array = [] }) => {
  return (
    <ul>
      {array.map(product => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </ul>
  );
};

export default ProductList;
