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
  margin-right: 0.5rem;
  background-color: #0066ff;
  padding: 0.2rem 0.7rem;
  border-radius: 5px;
`;

export const ButtonRemoveOptionsStyled = styled.button`
  margin-left: 0.5rem;
`;

export const OptionsContainerStyled = styled.div`
  position: absolute;
  margin-top: 0.5rem;
  top: 100%;
  left: 0;
  right: 0;
  overflow: auto;
  border: 1px solid #0066ff;
  border-radius: 5px;
`;
