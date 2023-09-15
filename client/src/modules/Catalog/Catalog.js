import { Element } from 'react-scroll';

import ProductList from 'modules/ProductList/ProductList';
import Filter from 'shared/components/Filter/Filter';
import SectionTitle from 'shared/components/SectionTitle/SectionTitle';
import { Section, Text, BgText, FlexBox, LinkMore } from './Catalog.styled';

const Catalog = ({ array = [] }) => {
  return (
    <Section>
      <Element name="catalog">
        <SectionTitle title={'Каталог товарiв'} />
        <BgText>Всi товари</BgText>
        <Text>
          Oбирай свого незамінного помічника для приготування будь-якої страви
        </Text>
        <FlexBox>
          <Filter title="Фiльтри" options="Всi" />
          <Filter title="Сортувати" options="Найпопулярніші" />
        </FlexBox>
        <ProductList array={array} />
        <LinkMore href="/">Показати бiльше</LinkMore>
      </Element>
    </Section>
  );
};

export default Catalog;
