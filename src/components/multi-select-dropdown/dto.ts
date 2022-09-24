export type OptionProps = {
  id: number;
  label: string;
};

type MultiSelectDropdownProps = {
  placeholderLabel?: string;
  options: OptionProps[];
  optionsNumber?: number;
};

export default MultiSelectDropdownProps;
