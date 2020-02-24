import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text } from 'native-base';
import styles from './styles';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Button>
        <Text>Hello World</Text>
      </Button>
    </SafeAreaView>
  );
};

export default App;
