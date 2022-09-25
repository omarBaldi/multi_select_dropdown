import React, { FC, useCallback, useState } from 'react';
import { DEFAULT_OPTIONS_NUMBER } from '../../constant';
import { DropdownOption } from '../dropdown-option';
import DropdownOptionProps, {
  DropdownParamsFuncType,
} from '../dropdown-option/dto';
import MultiSelectDropdownProps from './dto';

/**
 *
 * TODO: add scoped style for component (using styled components)
 * TODO: implement theme (using styled components)
 * TODO: add some mock-up data to verify that the filter functionality based on options selected works
 * TODO: integrate QR codes to store React components into them ??
 * (have QR code alongside the component you want to get the text from)
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

  const toggleDrodpown = (e: React.MouseEvent<HTMLDivElement>) => {
    //if one the options placed inside the parent is being clicked, prevent from changing state
    if (e.target !== e.currentTarget) return;
    setOpenDropdown((prevState) => !prevState);
  };

  const removeAllOptions = () => setOptionsSelected(new Map());

  const removeOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;

    //Get the parent element to access the data attribute
    const parentElement = e.target.parentElement;
    const key = parentElement?.dataset['key'];

    if (!key) return;

    //Delete the option based on key
    setOptionsSelected((prevOptions) => {
      const updatedOptions = new Map(prevOptions);
      updatedOptions.delete(key);

      return updatedOptions;
    });
  };

  const handleOptionClick = ({
    id: key,
    label: value,
  }: DropdownParamsFuncType) => {
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

  const renderOption = (option: DropdownOptionProps) => {
    const key = `opt-${option.id}`;

    return (
      <DropdownOption
        {...{
          key,
          ...option,
          onOptionClick: handleOptionClick,
        }}
      />
    );
  };

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
            {[...optionsSelected].map(([key, value]: [string, string]) => (
              <div key={key} data-key={key}>
                <span>{value}</span>
                <button onClick={removeOption}>x</button>
              </div>
            ))}
          </div>
        ) : (
          <p>{placeholderLabel}</p>
        )}
        <button onClick={removeAllOptions}>x</button>
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
          {options.map(renderOption)}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
