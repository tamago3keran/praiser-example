import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Statistics() {
  return (
    <View style={styles.container}>
      <Text>Statistics</Text>
    </View>
  );
}
