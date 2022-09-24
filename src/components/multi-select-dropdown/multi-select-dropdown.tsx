import { FC } from 'react';
import MultiSelectDropdownProps from './dto';

const MultiSelectDropdown: FC<MultiSelectDropdownProps> = ({
  placeholderLabel = 'Choose an option',
  options,
}: MultiSelectDropdownProps) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p>{placeholderLabel}</p>
        <button>.</button>
      </div>

      <div>
        {options.map(({ id, label }) => (
          <div key={`option-${id}`}>{label}</div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
