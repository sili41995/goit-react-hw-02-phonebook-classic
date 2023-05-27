import styled from '@emotion/styled';

const List = styled.ul`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemLabel = styled.span``;

const ItemButton = styled.button`
  &:hover {
    background-color: skyblue;
    color: white;
  }
`;

const css = { List, Item, ItemLabel, ItemButton };

export default css;
