export type OptionProps = {
  id: number;
  label: string;
};

type MultiSelectDropdownProps = {
  placeholderLabel?: string;
  options: OptionProps[];
};

export default MultiSelectDropdownProps;
