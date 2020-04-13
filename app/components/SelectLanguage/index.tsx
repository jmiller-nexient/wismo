import React, { ChangeEvent, useContext } from 'react';

import { LanguageContext } from 'components/LanguageProvider';

const SelectLanguage: React.FC = (): React.ReactElement => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useContext can only be used inside LanguageProvider');
  }

  const { changeLanguage, language } = context;

  const selectionChanged = (event: ChangeEvent<HTMLSelectElement>): void => changeLanguage(event.target.value);

  return (
    <select onChange={selectionChanged} value={language}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  );
};

export default SelectLanguage;
