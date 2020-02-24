import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Icon, StyleProvider, Text } from 'native-base';
import MyIcon from '../../config/MyIcon';
import styles from './styles';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

const App: FC = () => {
  return (
    <StyleProvider style={getTheme(material)}>
      <SafeAreaView style={styles.root}>
        <Button>
          <Text>Hello World</Text>
        </Button>
        <Icon>
          <MyIcon size={60} color="red" name="emo-happy" />
        </Icon>
      </SafeAreaView>
    </StyleProvider>
  );
};

export default App;
