import React, { useContext } from 'react';
import styles from './ContextExample.module.css';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
const ThemeContext = React.createContext(styles.light);

function ContextExample() {
  return(
    <>
    <ThemeContext.Provider value={styles.dark}>
      <ToolBar />
    </ThemeContext.Provider>
    </>  
  );
};

function ToolBar(props) {
  return(
    <div><ThemedButton /></div>
  );
};

function ThemedButton() {
  const theme = useContext(ThemeContext);
  console.log(theme, styles.dark);
  console.log(theme === styles.dark);
  return(
  <button className={styles.dark}>
    > I am styled by theme context!
  </button>
  );
}

export default ContextExample;
