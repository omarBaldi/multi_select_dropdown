import React, { FC, useCallback, useState } from 'react';
import { DEFAULT_OPTIONS_NUMBER } from '../../constant';
import { DropdownOption } from '../dropdown-option';
import DropdownOptionProps, {
  DropdownParamsFuncType,
} from '../dropdown-option/dto';
import MultiSelectDropdownProps from './dto';
import {
  ButtonRemoveOptionsStyled,
  DropdownContainerStyled,
  OptionsContainerStyled,
  OptionSelectedStyled,
  OptionsSelectedContainerStyled,
  SubWrapperStyled,
} from './style';

/**
 * TODO: implement theme (using styled components)
 * TODO: add some mock-up data to verify that the filter functionality based on options selected works
 * TODO: integrate QR codes to store React components into them ??
 * (have QR code alongside the component you want to get the text from)
 */
const MultiSelectDropdown: FC<MultiSelectDropdownProps> = ({
  placeholderLabel = 'Choose an option',
  options,
  optionsNumber = DEFAULT_OPTIONS_NUMBER,
  additionalStyle = {},
}: MultiSelectDropdownProps) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  //Map containing as a key the option id and as a value the label itself
  const [optionsSelected, setOptionsSelected] = useState<Map<string, string>>(
    new Map().set('hello', 'ok').set('now', 'ok2')
  );

  const toggleDrodpown = () => setOpenDropdown((prevState) => !prevState);

  const removeAllOptions = () => optionsSelected.clear();

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
      <DropdownOption key={key} {...option} onOptionClick={handleOptionClick} />
    );
  };

  return (
    <DropdownContainerStyled style={{ ...additionalStyle }}>
      <SubWrapperStyled onClick={toggleDrodpown}>
        {optionsSelected.size > 0 ? (
          <OptionsSelectedContainerStyled>
            {[...optionsSelected].map(([key, value]: [string, string]) => (
              <OptionSelectedStyled key={key} data-key={key}>
                <span>{value}</span>
                <button onClick={removeOption}>x</button>
              </OptionSelectedStyled>
            ))}
          </OptionsSelectedContainerStyled>
        ) : (
          <p>{placeholderLabel}</p>
        )}
        <ButtonRemoveOptionsStyled onClick={removeAllOptions}>
          <span>X</span>
        </ButtonRemoveOptionsStyled>
      </SubWrapperStyled>

      {openDropdown && (
        <OptionsContainerStyled ref={optionsContainerRef}>
          {options.map(renderOption)}
        </OptionsContainerStyled>
      )}
    </DropdownContainerStyled>
  );
};

export default MultiSelectDropdown;
