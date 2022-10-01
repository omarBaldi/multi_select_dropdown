import React from 'react';
import { OptionType } from '../multi-select-dropdown/dto';

type CommonDropdownOptionContainerProps = {
  options: OptionType[];
  optionsIdSelected: string[];
  additionalStyle?: React.CSSProperties;
  onOptionClick: (v: OptionType) => void;
};

type DropdownOptionContainerProps = CommonDropdownOptionContainerProps &
  ({ gridColumns?: 2 | 3 } | { optionsNumber?: number });

export default DropdownOptionContainerProps;
