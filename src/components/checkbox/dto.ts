import React from 'react';
import { OptionType } from '../multi-select-dropdown/dto';

type CheckboxProps = OptionType & {
  checked: boolean;
  additionalStyle?: React.CSSProperties;
  onCheckboxClick: ({ id, label }: OptionType) => void;
};

export default CheckboxProps;
