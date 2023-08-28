import  { useState } from 'react';
import './ColorToggle.css';

const ColorToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColorMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`color-toggle ${isDarkMode ? 'dark' : 'light'}`}>
      <label className="color-toggle-label">
        {isDarkMode ? '🌙' : '☀️'}
        <input
          type="checkbox"
          className="color-toggle-checkbox"
          checked={isDarkMode}
          onChange={toggleColorMode}
        />
      </label>
    </div>
  );
};

export default ColorToggle;
