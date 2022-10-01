import React, { FC, useRef } from 'react';
import { Checkbox } from '../checkbox';
import { OptionType } from '../multi-select-dropdown/dto';
import DropdownOptionContainerProps from './dto';

const DropdownOptionContainer: FC<DropdownOptionContainerProps> = ({
  options,
  optionsIdSelected,
  additionalStyle = {},
  onOptionClick,
}: DropdownOptionContainerProps) => {
  const additionalCheckboxStyle = useRef<React.CSSProperties>({
    padding: '0.5rem',
  });

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
    <div style={{ ...additionalStyle }}>
      <div
        style={{
          border: '1px solid red',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          padding: '1rem',
        }}
      >
        {options.map(renderOption)}
      </div>
    </div>
  );
};

export default DropdownOptionContainer;
