import React from 'react';
import { StyleSheet, View } from 'react-native';
import Health from './src/components/Health';

export default function App() {
  return (
    <View style={styles.container}>
      <Health />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
