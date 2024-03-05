import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Timer = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [timer, setTimer] = useState(null);
  const [displayTime, setDisplayTime] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState('lightgray');

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const handleStartTimer = () => {
    const totalSeconds = parseInt(hours || 0) * 3600 + parseInt(minutes || 0) * 60 + parseInt(seconds || 0);
    if (totalSeconds > 0) {
      setSeconds(totalSeconds);
      setTimer(setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000));
    }
  };

  const handleStopTimer = () => {
    clearInterval(timer);
  };

  const handleResetTimer = () => {
    clearInterval(timer);
    setHours('');
    setMinutes('');
    setSeconds('');
  };

  useEffect(() => {
    const hoursDisplay = formatTime(Math.floor(seconds / 3600));
    const minutesDisplay = formatTime(Math.floor((seconds % 3600) / 60));
    const secondsDisplay = formatTime(seconds % 60);
    setDisplayTime(`${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`);
  }, [seconds]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer</Text>
      <View style={styles.inputContainer}>
        <View style={[styles.inputBox, { borderColor: inputBorderColor }]}>
          <TextInput
            style={styles.input}
            placeholder="HH"
            keyboardType="numeric"
            value={hours}
            onChangeText={setHours}
            onFocus={() => setInputBorderColor('black')}
            onBlur={() => setInputBorderColor('lightgray')}
          />
        </View>
        <View style={[styles.inputBox, { borderColor: inputBorderColor }]}>
          <TextInput
            style={styles.input}
            placeholder="MM"
            keyboardType="numeric"
            value={minutes}
            onChangeText={setMinutes}
            onFocus={() => setInputBorderColor('black')}
            onBlur={() => setInputBorderColor('lightgray')}
          />
        </View>
        <View style={[styles.inputBox, { borderColor: inputBorderColor }]}>
          <TextInput
            style={styles.input}
            placeholder="SS"
            keyboardType="numeric"
            value={seconds}
            onChangeText={setSeconds}
            onFocus={() => setInputBorderColor('black')}
            onBlur={() => setInputBorderColor('lightgray')}
          />
        </View>
      </View>
      <Text style={styles.timer}>{displayTime}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleStartTimer}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleStopTimer}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleResetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputBox: {
    // borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: 'lightgray',
  },
  input: {
    width: 60,
    padding: 10,
    textAlign: 'center',
  },
  timer: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Timer;
