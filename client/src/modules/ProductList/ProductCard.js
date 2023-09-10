import { GiHearts, GiShoppingBag } from 'react-icons/gi';

import {
  Card,
  ImageWrap,
  ArrowWrap,
  ArrowLeft,
  ArrowRight,
  ActionsWrap,
  Action,
  Scales,
  DescWrap,
  Mark,
  Title,
  Price,
  OldPrice,
} from './ProductList.styled';

const ProductCard = ({
  product: { name, price, novelty, promotion, oldPrice, picture },
}) => {
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
        <ArrowWrap>
          <ArrowLeft />
          <ArrowRight />
        </ArrowWrap>
        <ActionsWrap>
          <Action>
            {' '}
            <GiHearts size="25" color="#98887A" />
          </Action>
          <Action>
            <GiShoppingBag size="25" color="#98887A" />
          </Action>
          <Action>
            <Scales />
          </Action>
        </ActionsWrap>
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
