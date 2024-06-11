import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Tab1() {

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50}}>Tab1</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'red',
  },
})