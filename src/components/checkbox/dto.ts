import React from 'react';

type CheckboxProps = {
  label: string;
  checked: boolean;
  additionalStyle?: React.CSSProperties;
  onCheckboxClick: (checked: boolean) => void;
};

export default CheckboxProps;
