import React from 'react';
import { DropdownOptionProps } from '../dropdown-option';

type MultiSelectDropdownProps = {
  placeholderLabel?: string;
  options: DropdownOptionProps[];
  optionsNumber?: number;
  additionalStyle?: React.CSSProperties;
};

export default MultiSelectDropdownProps;
