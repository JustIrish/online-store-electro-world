import { ImageWrap } from './ProductList.styled';

const ProductCard = ({
  product: { name, price, novelty, promotion, picture },
}) => {
  return (
    <li>
      <ImageWrap>
        <img
          src={require(`../../${picture}`)}
          alt={name}
          width="292"
          loading="lazy"
        />
      </ImageWrap>
      <p>{name}</p>
      <p>{price}</p>
    </li>
  );
};

export default ProductCard;
