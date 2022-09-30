import React, { FC, useRef } from 'react';
import CheckboxProps from './dto';

const Checkbox: FC<CheckboxProps> = ({
  label,
  checked,
  additionalStyle = {},
  onCheckboxClick,
}: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    onCheckboxClick(checked);
  };

  return (
    <div style={{ ...additionalStyle }}>
      <input
        type='checkbox'
        name=''
        id=''
        ref={checkboxRef}
        onChange={handleInputChange}
        defaultChecked={checked}
      />
      <span style={{ marginLeft: '0.5rem' }}>{label}</span>
    </div>
  );
};

export default Checkbox;
