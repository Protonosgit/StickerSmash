import { View, StyleSheet,Alert, StatusBar,Text } from 'react-native'
import React, { useEffect,useState } from 'react'

export default function Tab2() {

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 50}}>Tab2</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  }

})

