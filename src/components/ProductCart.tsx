import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

function ProductCart() {
  return (
   <View style={styles.container}>
    <Image source={require("../assets/ttt.png")}
        style={styles.coverImage}
    />
   </View>
  )
}

export default ProductCart


const styles = StyleSheet.
create ({
    container:{
       flex: 1,
    //    borderWidth:1,
    //    borderColor:"black",
    
    },
    coverImage:{
        height:256,
        width:"100%",
        borderRadius:20,
        marginVertical:10,
        marginLeft:10,
        

    }
})