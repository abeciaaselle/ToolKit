import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setTimer(0);
    setIsActive(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stopwatch</Text>
      <Text style={styles.timer}>{timer}s</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleToggle}>
          <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
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
  timer: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 120,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Stopwatch;
