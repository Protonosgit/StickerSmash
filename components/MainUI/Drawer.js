import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect,useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const DrawerContent = () => {


  return (
    <View style={styles.container}>
      <Text>Drawer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
})

export default DrawerContent