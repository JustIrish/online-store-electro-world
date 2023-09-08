import { ImageWrap, DescWrap, Title, Price } from './ProductList.styled';

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
          height="292"
          loading="lazy"
        />
      </ImageWrap>
      <DescWrap>
        {' '}
        <Title>{name}</Title>
        <Price>{price} грн.</Price>
      </DescWrap>
    </li>
  );
};

export default ProductCard;
