import React from 'react'
import { Vibration, View,Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';


const HomeScreen = () => {
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
    {/* <Text style={styles.buttonText}>
      Sign in with Facebook
    </Text> */}
    <Header/>
  </LinearGradient>
  )
}

export default  HomeScreen


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  buttonText:{

  }
})