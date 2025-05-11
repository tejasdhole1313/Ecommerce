import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";


 

function ProductCart() {
//    const ProductCard = () => {
//     const [isLiked, setIsLiked] = useState(false);
   
  return (
   <View style={styles.container}>
    <Image source={require("../assets/ttt.png")}
        style={styles.coverImage}
    />
    <View>
    <Text style={styles.title}>rrh</Text>
    <Text style={styles.price}>$45</Text>
    </View>
    {/* <TouchableOpacity  onPress={()=> (!isLiked)}  style={styles.likeContainer}>
        { isLiked ? (
        <AntDesign name={"heart"} size={20} color={"#E55B5B"}/>
        ):(
         <AntDesign name={"hearto"} size={20} color={"#E55B5B"}/>
        )    }
    </TouchableOpacity> */}
   </View>
  )
}
   
   
export default ProductCart


const styles = StyleSheet.
create ({
    container:{
       flex: 1,
    marginTop:10,
    position:"relative"
    
    },
    coverImage:{
        height:256,
        width:150,
        borderRadius:20,
       
        
        

    },
    title: {
fontSize:18,
color:"#444444",
fontWeight:"600",
    },
    price:
    {
        fontSize:18,
        color:"#9C9C9C",
fontWeight:"600",

    },
    content : {
        paddingLeft: 15,

    },
    likeContainer: {
        height:34,
        width:34,
        backgroundColor:"#FFFFFF",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 17,
        position:"absolute",
        top:10,
        right:15,
    }
})