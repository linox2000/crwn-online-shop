import styled from "styled-components";
import ShopBagIcon from "../shop-bag-icon/shop-bag-icon.component";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
export const ShopBagContainer = styled(ShopBagIcon)`
  width: 24px;
  height: 24px;
`;
