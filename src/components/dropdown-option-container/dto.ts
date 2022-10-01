import React from 'react';
import { OptionType } from '../multi-select-dropdown/dto';

type DropdownOptionContainerProps = {
  options: OptionType[];
  optionsIdSelected: string[];
  additionalStyle?: React.CSSProperties;
  rowsNumber?: number;
  gridColumns?: 1 | 2 | 3;
  onOptionClick: (v: OptionType) => void;
};

export default DropdownOptionContainerProps;
