import React, { FC, useCallback, useState } from 'react';
import { DEFAULT_OPTIONS_NUMBER } from '../../constant';
import MultiSelectDropdownProps from './dto';

/**
 *
 * TODO: replace magic number (optionsNumber) with constant variable
 * TODO: add scoped style for component (using styled components)
 * TODO: implement theme (using styled components)
 */
const MultiSelectDropdown: FC<MultiSelectDropdownProps> = ({
  placeholderLabel = 'Choose an option',
  options,
  optionsNumber = DEFAULT_OPTIONS_NUMBER,
}: MultiSelectDropdownProps) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  //Map containing as a key the option id and as a value the label itself
  const [optionsSelected, setOptionsSelected] = useState<Map<string, string>>(
    new Map()
  );

  const toggleDrodpown = () => setOpenDropdown((prevState) => !prevState);

  const handleOptionClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLDivElement)) return;

    const { key, value } = e.target.dataset;
    if (!key || !value) return;

    /* As soon as one of the options is clicked, I need to check if
      the current was previously stored. 
          If yes ---> remove it
          If no ---> add it 
      */
    setOptionsSelected((prevOptions) => {
      const updatedOptions = new Map(prevOptions);

      updatedOptions.has(key)
        ? updatedOptions.delete(key)
        : updatedOptions.set(key, value);

      return updatedOptions;
    });
  };

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
        {optionsSelected.size > 0 ? (
          <div>
            {[...optionsSelected].map(([key, value]) => (
              <div key={key}>{value}</div>
            ))}
          </div>
        ) : (
          <p>{placeholderLabel}</p>
        )}
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
            <div
              key={`option-${id}`}
              data-key={`option-${id}`}
              data-value={label}
              onClick={handleOptionClick}
              style={{ padding: '1rem 0.5rem', cursor: 'pointer' }}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
