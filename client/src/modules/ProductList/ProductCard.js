import PropTypes from 'prop-types';

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
  product: { name, price, novelty, promotion, oldPrice, picture, picture2x },
}) => {
  return (
    <Card>
      <ImageWrap>
        <img
          srcSet={`
            ${require(`../../${picture}`)} 1x,
            ${require(`../../${picture2x}`)} 2x
          `}
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

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    novelty: PropTypes.bool.isRequired,
    promotion: PropTypes.string,
    oldPrice: PropTypes.string,
    picture: PropTypes.string.isRequired,
    picture2x: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
