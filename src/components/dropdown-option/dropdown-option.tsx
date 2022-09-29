import { FC } from 'react';
import DropdownOptionProps from './dto';
import { DropdownOptionStyled } from './style';

const DropdownOption: FC<DropdownOptionProps> = ({
  onOptionClick,
  ...restProps
}: DropdownOptionProps) => {
  const handleOptionClick = () => onOptionClick?.(restProps);

  return (
    <DropdownOptionStyled onClick={handleOptionClick}>
      {restProps.label}
    </DropdownOptionStyled>
  );
};

export default DropdownOption;
