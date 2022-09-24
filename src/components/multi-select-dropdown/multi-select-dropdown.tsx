import { FC, useState } from 'react';
import MultiSelectDropdownProps from './dto';

/**
 *
 * TODO: add scoped style for component (using styled components)
 * TODO: implement theme (using styled components)
 */
const MultiSelectDropdown: FC<MultiSelectDropdownProps> = ({
  placeholderLabel = 'Choose an option',
  options,
}: MultiSelectDropdownProps) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const toggleDrodpown = () => setOpenDropdown((prevState) => !prevState);

  return (
    <div style={{ border: '1px solid', position: 'relative' }}>
      <div
        onClick={toggleDrodpown}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 0.5rem',
          cursor: 'pointer',
        }}
      >
        <p>{placeholderLabel}</p>
        <button>.</button>
      </div>

      {openDropdown && (
        <div
          style={{
            border: '1px solid red',
            position: 'absolute',
            left: 0,
            right: 0,
          }}
        >
          {options.map(({ id, label }) => (
            <div key={`option-${id}`} style={{ padding: '1rem 0.5rem' }}>
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
