import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Tab3() {

  return (
    
    <View style={styles.container}>
      <Text style={{fontSize: 50}}>Tab3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'blue',
  },
})