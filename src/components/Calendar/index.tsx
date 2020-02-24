import React, { FC } from 'react';
import { View } from 'react-native';
import { Agenda } from 'react-native-calendars';

const markedDates = {
  '2020-02-18': { marked: true },
};

const App: FC = () => {
  return (
    <Agenda
      markedDates={markedDates}
      renderEmptyDate={(): JSX.Element => {
        return <View />;
      }}
      renderItem={(): JSX.Element => {
        return <View />;
      }}
      rowHasChanged={(): boolean => {
        return false;
      }}
    />
  );
};

export default App;
