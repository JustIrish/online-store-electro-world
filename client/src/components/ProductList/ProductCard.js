const ProductCard = ({
  product: { name, price, novelty, promotion, picture },
}) => {
  return (
    <li>
      <img
        src={require(`../../${picture}`)}
        alt={name}
        width="292"
        loading="lazy"
      />
      <p>{name}</p>
      <p>{price}</p>
    </li>
  );
};

export default ProductCard;
