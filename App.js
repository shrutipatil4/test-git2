

// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from './src/Calculator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
