import React from 'react';
import {StyleSheet ,Image} from 'react-native';
import { SafeAreaView,TextInput } from 'react-native';
import { useState } from 'react';
import { Feather, Entypo } from "@expo/vector-icons";
import { View } from 'react-native';
const styles = StyleSheet.create({
    container: {
      paddingTop: 40,
      flexDirection:'row',
      backgroundColor:'black',
    },
    tinyLogo: {
    height:60,
    width:60
    },
    tinyLog:{
        maxHeight:25,
        maxWidth:25,
        marginTop:10,
        marginLeft:5,
    },
    inputbox:{
        height:35,
        marginTop:5,
        width:240,
        padding:5,
        borderColor:'grey',
        backgroundColor:'grey',
        color:'white',
        marginLeft:10,
        borderRadius:3,
        marginRight:10,
    },
  });
  
const HeaderUpper=()=>{
    const[text,setText]=useState('')
    return(
        <View>
  <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('.././images/download.png')}/>
      <TextInput style={styles.inputbox} value={text}
      onChangeText={setText} placeholder="Search" placeholderTextColor='white'/>
      <Image style={styles.tinyLog} source={require('.././images/2.png')}/>
  </View>
  </View>
    )
}
export default HeaderUpper;