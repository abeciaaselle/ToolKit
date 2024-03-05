import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult('=' + eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Calculator</Text> */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.input}>{input}</Text>
        </View>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleClear()}>
          <Text style={styles.buttonText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
          <Text style={styles.buttonText}>-/+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, { flex: 0.5 }]} onPress={() => handlePress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { flex: 0.5 }]} onPress={() => handlePress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { flex: 0.5 }]} onPress={() => handlePress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { flex: 0.5 }]} onPress={() => handlePress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, { flex: 0.5 }]} onPress={() => handlePress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { flex: 0.5 }]} onPress={() => handlePress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { flex: 0.5 }]} onPress={handleCalculate}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginBottom: -230,
    padding: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    maxWidth: 300,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  input: {
    fontSize: 40,
    color: 'black',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    flex: 0.25,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
  result: {
    fontSize: 60,
    alignSelf: 'flex-end',
  },
});

export default Calculator;
