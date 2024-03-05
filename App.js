import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Calculator from './screens/Calculator';
import Stopwatch from './screens/Stopwatch';
import AlarmClock from './screens/AlarmClock';
import Timer from './screens/Timer';
import Calendar from './screens/Calendar';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Calculator');

  const renderPage = () => {
    switch (currentPage) {
      case 'Calculator':
        return <Calculator />;
      case 'Stopwatch':
        return <Stopwatch />;
      case 'AlarmClock':
        return <AlarmClock />;
      case 'Timer':
        return <Timer />;
      case 'Calendar':
        return <Calendar />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderPage()}
      <View style={styles.buttonContainer}>
        <Icon name="calculator" size={26} color="white" onPress={() => setCurrentPage('Calculator')} />
        <Icon name="hourglass" size={26} color="white" onPress={() => setCurrentPage('Stopwatch')} />
        <Icon name="bell" size={26} color="white" onPress={() => setCurrentPage('AlarmClock')} />
        <Icon name="clock-o" size={26} color="white" onPress={() => setCurrentPage('Timer')} />
        <Icon name="calendar" size={26} color="white" onPress={() => setCurrentPage('Calendar')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width, 
    backgroundColor: 'black',
    padding: 10,
  },
});

export default App;
