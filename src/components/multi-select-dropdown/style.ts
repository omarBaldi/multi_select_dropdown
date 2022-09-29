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
