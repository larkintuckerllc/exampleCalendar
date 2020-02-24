import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import Calendar from '../Calendar';
import styles from './styles';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Calendar />
    </SafeAreaView>
  );
};

export default App;
