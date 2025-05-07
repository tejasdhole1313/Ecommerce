import React, { useState } from 'react'
import { Vibration, View,Text, StyleSheet, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from "react-native-vector-icons/Fontisto";
import Category from '../components/Category';
import ProductCart from '../components/ProductCart';


const categories = ["Trending Now", "All", "New", "Mens", "Womens"];
const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
    <Header/>
    <Text style={styles.matchText}>Match Your Style</Text> 
    {/*Input container*/}
    <View style={styles.inputContainer} >
      <View style={styles.iconContainer}>
      <Fontisto name={'search'} size={24} color={"black"}/>
      </View>
      <TextInput style={styles.textInput}  placeholder='Search' />
      </View> 
      {/*Category section*/}
      <FlatList data={categories} renderItem={({item})=>(
        <Category 
        item={item}
      selectedCategory={selectedCategory}
      setSelectedCategory = {setSelectedCategory}/>
      
  )}  
  keyExtractor={(item) => item }
      horizontal={true}
      showsHorizontalScrollIndicator = {false}
      />

      {/* <Category/> */}
      {/* product list */}
      <View style={{flexDirection:"row",
        justifyContent:"space-between"
      }}>
        <ProductCart/>
        <ProductCart/>
      </View>

  </LinearGradient>
  )
}

export default  HomeScreen


const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
  },
  matchText:{
    fontSize:28,
    color:"black",
    marginTop:25,


  },
  inputContainer:{
    backgroundColor:"#FFFFFF",
    height:48,
    borderRadius:12,
  flexDirection:"row",
  alignItems:'center',
  marginVertical:20,
   
  },
  textInput: {
    flex:1,
   
  },
  iconContainer: {
    marginHorizontal:20,

  }
})