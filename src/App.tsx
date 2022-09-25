import { DropdownOptionProps } from './components/dropdown-option';
import { MultiSelectDropdown } from './components/multi-select-dropdown';
import {} from './components/multi-select-dropdown/dto';

/**
 *
 * @returns
 * TODO: create multi-select dropdown component
 */
function App() {
  const dropdownOptions: DropdownOptionProps[] = [...Array(10)].map(
    (_, index: number) => ({
      id: index.toString(),
      label: `Dropdown label #${index.toString().padStart(2, '0')}`,
    })
  );

  return (
    <div className='App'>
      <MultiSelectDropdown options={dropdownOptions} />
    </div>
  );
}

export default App;
