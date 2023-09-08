import {
  Card,
  ImageWrap,
  DescWrap,
  Mark,
  Title,
  Price,
  OldPrice,
} from './ProductList.styled';

const ProductCard = ({
  product: { name, price, novelty, promotion, oldPrice, picture },
}) => {
  console.log(novelty);
  return (
    <Card>
      <ImageWrap>
        <img
          src={require(`../../${picture}`)}
          alt={name}
          width="292"
          height="292"
          loading="lazy"
        />
        {novelty && <Mark>New</Mark>}
        {promotion && <Mark>-{promotion}%</Mark>}
      </ImageWrap>
      <DescWrap>
        {' '}
        <Title>{name}</Title>
        <div>
          {oldPrice && <OldPrice>{oldPrice} грн.</OldPrice>}
          <Price>{price} грн.</Price>
        </div>
      </DescWrap>
    </Card>
  );
};

export default ProductCard;
