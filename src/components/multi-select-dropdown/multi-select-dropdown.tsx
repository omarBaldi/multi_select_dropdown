import { FC, useCallback, useState } from 'react';
import MultiSelectDropdownProps from './dto';

/**
 *
 * TODO: add optional number prop to determine how many options should be in view
 * TODO: add scoped style for component (using styled components)
 * TODO: implement theme (using styled components)
 */
const MultiSelectDropdown: FC<MultiSelectDropdownProps> = ({
  placeholderLabel = 'Choose an option',
  options,
  optionsNumber = 2,
}: MultiSelectDropdownProps) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const toggleDrodpown = () => setOpenDropdown((prevState) => !prevState);

  const optionsContainerRef = useCallback(
    (el: HTMLDivElement) => {
      if (el && options.length > 0) {
        const firstChildren = [...el.children][0];
        const firstChildrenHeight = firstChildren.clientHeight;
        const maxContainerHeight = firstChildrenHeight * optionsNumber;

        el.style.maxHeight = `${maxContainerHeight}px`;
      }
    },
    [options, optionsNumber]
  );

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
          ref={optionsContainerRef}
          style={{
            border: '1px solid red',
            position: 'absolute',
            left: 0,
            right: 0,
            overflow: 'auto',
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
