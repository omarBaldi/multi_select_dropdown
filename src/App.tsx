import React from 'react';
import { Helmet } from 'react-helmet';
import { DropdownOptionProps } from './components/dropdown-option';
import { MultiSelectedDropdownStyled } from './components/multi-select-dropdown/style';
import GlobalStyle from './globalStyle';

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
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Multi-select dropdown</title>
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Lato&display=swap'
          rel='stylesheet'
        ></link>
      </Helmet>

      <div className='App'>
        <GlobalStyle />
        <div className='container'>
          <MultiSelectedDropdownStyled options={dropdownOptions} />
        </div>
      </div>
    </>
  );
}

export default App;
