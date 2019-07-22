import React from 'react';
import styles from './App.module.scss';
import Screen from './views/screen/Screen';

const App = () => {
  return (
    <div className={styles.App}>
      <Screen
        name="Andrew"
      >
      </Screen>
    </div>
  );
}

export default App;
