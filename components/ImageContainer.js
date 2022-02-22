import React from 'react'
import {View,Image,Text,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native'
const style=StyleSheet.create({
    imageStyle:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign: "center",
        marginTop:23
    }
})
const ImageContainer=()=>{
   return (
       <ScrollView>
       <View style={style.imageStyle}>
         <Image source={require('.././images/12.jpg')}/>
       </View>
       </ScrollView>
   )
}
export default ImageContainer