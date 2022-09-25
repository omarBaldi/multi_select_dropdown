import { FC } from 'react';
import DropdownOptionProps from './dto';

const DropdownOption: FC<DropdownOptionProps> = ({
  onOptionClick,
  ...restProps
}: DropdownOptionProps) => {
  const handleOptionClick = () => onOptionClick?.(restProps);

  return (
    <div
      onClick={handleOptionClick}
      style={{ padding: '1rem 0.5rem', cursor: 'pointer' }}
    >
      {restProps.label}
    </div>
  );
};

export default DropdownOption;
