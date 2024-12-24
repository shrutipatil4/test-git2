// src/Calculator.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput, Provider as PaperProvider } from 'react-native-paper';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <TextInput
          label="Input"
          value={input}
          onChangeText={(text) => setInput(text)}
          style={styles.input}
        />
        <Text style={styles.result}>{result}</Text>
        <View style={styles.buttons}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/'].map((value) => (
            <Button key={value} mode="contained" onPress={() => handlePress(value)} style={styles.button}>
              {value}
            </Button>
          ))}
          <Button mode="contained" onPress={handleCalculate} style={[styles.button, styles.equalsButton]}>
            =
          </Button>
          <Button mode="contained" onPress={handleClear} style={styles.button}>
            C
          </Button>
        </View>
        <Text style={styles.footer}>Calc by Shruti</Text>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  result: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    margin: 4,
    width: 60,
  },
  equalsButton: {
    backgroundColor: 'green',
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default Calculator;
