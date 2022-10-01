import React, { FC, useCallback, useState } from 'react';
import { DropdownOptionContainer } from '../dropdown-option-container';
import MultiSelectDropdownProps, { OptionType } from './dto';
import {
  ButtonRemoveOptionsStyled,
  DropdownContainerStyled,
  OptionSelectedStyled,
  OptionsSelectedContainerStyled,
  SubWrapperStyled,
} from './style';

/**
 * TODO: replace magic number with constant variable (renderOptionsSelected)
 * TODO: implement theme (using styled components)
 * TODO: add some mock-up data to verify that the filter functionality based on options selected works
 * TODO: integrate QR codes to store React components into them ??
 * (have QR code alongside the component you want to get the text from)
 */
const MultiSelectDropdown: FC<MultiSelectDropdownProps> = ({
  placeholderLabel = 'Choose an option',
  options,
  additionalStyle = {},
}: MultiSelectDropdownProps) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(true);

  //Map containing as a key the option id and as a value the label itself
  const [optionsSelected, setOptionsSelected] = useState<Map<string, string>>(
    new Map()
  );

  const toggleDrodpown = () => setOpenDropdown((prevState) => !prevState);

  const removeAllOptions = () => optionsSelected.clear();

  const removeOption = (optionId: string) => {
    setOptionsSelected((prevOptions) => {
      const updatedOptions = new Map(prevOptions);
      updatedOptions.delete(optionId);

      return updatedOptions;
    });
  };

  const handleOptionClick = useCallback(
    ({ id: key, label: value }: OptionType) => {
      setOptionsSelected((prevOptions) => {
        const updatedOptions = new Map(prevOptions);

        updatedOptions.has(key)
          ? updatedOptions.delete(key)
          : updatedOptions.set(key, value);

        return updatedOptions;
      });
    },
    []
  );

  const renderOptionsSelected = (options: Map<string, string>) => {
    /* If the options are less than N elements, render those,
    otherwise render the first N elements + element containing the rest  */
    const firstElements = [...options].slice(0, 3);
    const rest = [...options].slice(3);

    return (
      <div style={{ display: 'flex' }}>
        {firstElements.map(([key, value]: [string, string]) => {
          return (
            <OptionSelectedStyled key={key} onClick={() => removeOption(key)}>
              <span>{value}</span>
            </OptionSelectedStyled>
          );
        })}

        {rest.length > 0 && (
          <div
            style={{
              backgroundColor: 'red',
              color: 'white',
              padding: '0.2rem 0.5rem',
            }}
          >
            <span>{rest.length.toString()}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <DropdownContainerStyled style={{ ...additionalStyle }}>
      <SubWrapperStyled onClick={toggleDrodpown}>
        {optionsSelected.size > 0 ? (
          <OptionsSelectedContainerStyled>
            {renderOptionsSelected(optionsSelected)}
          </OptionsSelectedContainerStyled>
        ) : (
          <p>{placeholderLabel}</p>
        )}
        <ButtonRemoveOptionsStyled onClick={removeAllOptions}>
          <span>X</span>
        </ButtonRemoveOptionsStyled>
      </SubWrapperStyled>

      {openDropdown && (
        <DropdownOptionContainer
          options={options}
          optionsIdSelected={[...optionsSelected.keys()]}
          onOptionClick={handleOptionClick}
          gridColumns={2}
        />
      )}
    </DropdownContainerStyled>
  );
};

export default MultiSelectDropdown;
