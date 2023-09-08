import styled from 'styled-components';

import { ReactComponent as SvgScales } from 'images/svg/scales.svg';
import { ReactComponent as SvgArrowRight } from 'images/svg/arrow-right.svg';
import { ReactComponent as SvgArrowLeft } from 'images/svg/arrow-left.svg';

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 380px);
  grid-template-rows: repeat(3, 435px);
  column-gap: 51px;
  row-gap: 60px;
`;

export const ImageStyled = styled.img`
  border-radius: 6px;
  box-shadow: 0px 0px 15px 0px rgba(152, 136, 122, 0.5);
`;

export const Descr = styled.p`
  position: absolute;
  bottom: 57px;
  right: 0;
  padding: 22px 48px;
  border-radius: 0px 0px 8px 0px;
  opacity: 0.85;
  font-family: 'Sansation Regular';
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.009;
  letter-spacing: 1px;
  background-color: ${({ theme: { colors } }) => colors.accent};
  backdrop-filter: blur(20px);
`;

export const ItemTitle = styled.p`
  margin-top: 30px;
  font-size: 22px;
`;

export const Card = styled.li``;

export const ImageWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 380px;
  padding: 30px 44px;
  background-color: ${({ theme: { colors } }) => colors.bg};
  border-radius: 6px;
  border: 0px solid transparent;
  box-shadow: 0px 0px 15px 0px rgba(152, 136, 122, 0.5);
  transition: border-width 300ms cubic-bezier(0.165, 0.84, 0.44, 1),
    border-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

  img {
    transform: translateY(0);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
      width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  ${Card}:hover &,
  ${Card}:focus {
    border-width: 3px;
    border-color: rgba(152, 136, 122, 0.8);

    img {
      width: 250px;
      transform: translateY(-20%);
    }
  }
`;

export const ArrowWrap = styled.div`
  visibility: hidden;
  opacity: 0;

  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Card}:hover &, ${Card}:focus & {
    visibility: visible;
    opacity: 1;
  }
`;

export const ArrowRight = styled(SvgArrowRight)`
  width: 22px;
  height: 16px;
`;

export const ArrowLeft = styled(SvgArrowLeft)`
  width: 22px;
  height: 16px;
`;

export const ActionsWrap = styled.div`
  visibility: hidden;
  opacity: 0;

  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 21px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Card}:hover &, ${Card}:focus & {
    visibility: visible;
    opacity: 1;
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e8e8e8;
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const Scales = styled(SvgScales)`
  width: 37px;
  height: 26px;
`;

export const DescWrap = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Title = styled.p`
  font-size: 22px;
`;

export const Price = styled.p`
  font-size: 22px;
  color: ${({ theme: { colors } }) => colors.accent};
`;

export const OldPrice = styled.p`
  font-size: 19px;
  text-decoration: line-through;
  color: #c4c4c4;
`;

export const Mark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-family: 'Sansation Regular';
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.009;
  letter-spacing: 1px;
  border-radius: 0px 7px 0px 0px;
  opacity: 0.85;
  padding: 13px 18px;
  background-color: ${({ theme: { colors } }) => colors.accent};
  backdrop-filter: blur(20px);

  ${Card}:hover &,
  ${Card}:focus {
    border-radius: 0px 3px 0px 0px;
  }
`;
