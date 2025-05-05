import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Header() {
  return (
   <View>
    <View style={styles.appIconContainer}>
      <Image source={require("../assets/apps.png")} 
      style={styles.appIcon}
      />
    </View>
    
    <Text>rgtnn</Text></View>
  )
}

export default Header
const styles = StyleSheet.create({
  appIconContainer:{
  width:44,
  borderRadius: 22,
  justifyContent:'center',
  alignItems:"center",
  },
  appIcon:{
    height:28,
    width:28,
  },
  dp: {
    height:44,
    width:44,
  },
})