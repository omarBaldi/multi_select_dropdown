import React, { FC, useRef } from 'react';
import { useCallback } from 'react';
import { DEFAULT_OPTIONS_COLUMNS, DEFAULT_OPTIONS_ROWS } from '../../constant';
import { Checkbox } from '../checkbox';
import { OptionType } from '../multi-select-dropdown/dto';
import DropdownOptionContainerProps from './dto';
import { OptionsContainerStyled } from './style';

/**
 *
 * @param param0
 * @returns
 * TODO: replace inline style with styled component + pass gridColumns prop inside
 */
const DropdownOptionContainer: FC<DropdownOptionContainerProps> = ({
  options,
  optionsIdSelected,
  additionalStyle = {},
  onOptionClick,
  rowsNumber = DEFAULT_OPTIONS_ROWS,
  gridColumns = DEFAULT_OPTIONS_COLUMNS,
}: DropdownOptionContainerProps) => {
  const additionalCheckboxStyle = useRef<React.CSSProperties>({
    padding: '0.5rem',
  });

  const optionContainerRef = useCallback(
    (el: HTMLDivElement) => {
      if (el && options.length > 0) {
        const firstElement = [...el.children][0];
        const firstElementHeight = firstElement.clientHeight;

        const maxContainerHeight = firstElementHeight * rowsNumber;
        el.style.maxHeight = `${maxContainerHeight}px`;
      }
    },
    [options, rowsNumber]
  );

  const renderOption = (optionProps: OptionType) => {
    const key = `opt-${optionProps.id}`;
    const shouldBeChecked = optionsIdSelected.includes(optionProps.id);

    return (
      <Checkbox
        key={key}
        {...optionProps}
        checked={shouldBeChecked}
        onCheckboxClick={onOptionClick}
        additionalStyle={additionalCheckboxStyle.current}
      />
    );
  };

  return (
    <OptionsContainerStyled style={{ ...additionalStyle }}>
      <div
        ref={optionContainerRef}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        }}
      >
        {options.map(renderOption)}
      </div>
    </OptionsContainerStyled>
  );
};

export default DropdownOptionContainer;
