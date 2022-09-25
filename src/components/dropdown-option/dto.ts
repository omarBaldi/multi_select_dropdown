export type DropdownParamsFuncType = Omit<DropdownOptionProps, 'onOptionClick'>;

type DropdownOptionProps = {
  id: string;
  label: string;
  onOptionClick?: (p: DropdownParamsFuncType) => void;
};

export default DropdownOptionProps;
