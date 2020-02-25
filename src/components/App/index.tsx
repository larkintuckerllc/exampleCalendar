import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Icon, StyleProvider, Text } from 'native-base';
import MyIcon from '../../config/MyIcon';
import Fontello from '../../config/Fontello';
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
          <Fontello size={60} color="red" name="workshop" />
        </Icon>
        <Icon>
          <Fontello size={60} color="red" name="upload" />
        </Icon>
        <Icon>
          <Fontello size={60} color="red" name="trial" />
        </Icon>
        <Icon>
          <Fontello size={60} color="red" name="trash" />
        </Icon>
        <Icon>
          <Fontello size={60} color="red" name="trash-solid" />
        </Icon>
        <Icon>
          <Fontello size={60} color="red" name="tracking-numbers" />
        </Icon>
        <Icon>
          <Fontello size={60} color="red" name="tag" />
        </Icon>
        <Icon>
          <Fontello size={60} color="red" name="surgery" />
        </Icon>
        <Icon>
          <Fontello size={60} color="red" name="surgery-sheet" />
        </Icon>
        <Icon>
          <Fontello size={60} color="red" name="star" />
        </Icon>
        <Icon>
          <Fontello size={60} color="red" name="signature" />
        </Icon>
        <Icon>
          <Fontello size={60} color="red" name="show" />
        </Icon>
      </SafeAreaView>
    </StyleProvider>
  );
};

export default App;
