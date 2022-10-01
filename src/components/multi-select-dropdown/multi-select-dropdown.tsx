import React, { FC, useCallback, useState } from 'react';
import { DropdownOptionContainer } from '../dropdown-option-container';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import MultiSelectDropdownProps, { OptionType } from './dto';
import {
  ButtonRemoveOptionsStyled,
  DotsStyled,
  DropdownContainerStyled,
  OptionSelectedBubbleStyled,
  OptionSelectedStyled,
  OptionsSelectedContainerStyled,
  SubWrapperStyled,
} from './style';

/**
 * TODO: replace magic number with constant variable (renderOptionsSelected)
 * TODO: implement theme (using styled components)
 * TODO: add some mock-up data to verify that the filter functionality based on options selected works
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
    const firstElements = [...options].slice(0, 3);
    const otherElements = [...options].slice(3);
    const otherElementsLengthLabel = otherElements.length.toString();

    return (
      <div style={{ display: 'flex' }}>
        {firstElements.map(([key, value]: [string, string]) => {
          return (
            <OptionSelectedStyled key={key} onClick={() => removeOption(key)}>
              <span>{value}</span>
            </OptionSelectedStyled>
          );
        })}

        {otherElements.length > 0 && (
          <>
            <DotsStyled>
              <span>...</span>
            </DotsStyled>

            <OptionSelectedBubbleStyled>
              <span>{otherElementsLengthLabel}</span>
            </OptionSelectedBubbleStyled>
          </>
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
          <CloseIcon />
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
