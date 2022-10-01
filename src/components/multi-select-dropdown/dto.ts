import React from 'react';

export type OptionType = {
  id: string;
  label: string;
};

type MultiSelectDropdownProps = {
  placeholderLabel?: string;
  options: OptionType[];
  additionalStyle?: React.CSSProperties;
};

export default MultiSelectDropdownProps;
