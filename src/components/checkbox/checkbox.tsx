import React, { FC } from 'react';
import CheckboxProps from './dto';

const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  checked,
  additionalStyle = {},
  onCheckboxClick,
}: CheckboxProps) => {
  const handleCheckboxClick = () => onCheckboxClick({ id, label });

  return (
    <div style={{ ...additionalStyle }} onClick={handleCheckboxClick}>
      <input
        id={id}
        type='checkbox'
        name={`checkbox-${id}`}
        checked={checked}
        readOnly
      />
      <span style={{ marginLeft: '0.5rem' }}>{label}</span>
    </div>
  );
};

export default Checkbox;
