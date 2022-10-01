import styled from 'styled-components';

export const DropdownContainerStyled = styled.div`
  border-radius: 5px;
  position: relative;
  border: 1px solid;
  width: 400px;
`;

export const SubWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`;

export const OptionsSelectedContainerStyled = styled.div`
  flex: 1;
  display: flex;
`;

export const OptionSelectedStyled = styled.div`
  background-color: #0066ff;
  padding: 0.2rem 0.7rem;
  border-radius: 5px;
  margin-right: 0.5rem;
`;

export const ButtonRemoveOptionsStyled = styled.button`
  margin-left: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    stroke: #0066ff;
  }
`;

export const OptionSelectedBubbleStyled = styled.div`
  background-color: #0066ff;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
`;

export const DotsStyled = styled.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: flex-end;
`;
