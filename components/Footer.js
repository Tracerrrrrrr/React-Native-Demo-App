import React from 'react'
import {View,Text,StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'
const styles=StyleSheet.create({
   footColor:{
    color:'white',
    fontSize:9.5,
    fontWeight:'bold',
    flexDirection:'row',
    marginLeft:15,
    marginTop:10
   }
})
const Footer=()=>{
    return (
            <View>
    <Text style={styles.footColor}>Hello</Text>
    <Text style={styles.footColor}>Hello</Text>
    <Text style={styles.footColor}>Hello</Text>
    <Text style={styles.footColor}>Hello</Text>
    </View>
    )
}
export default Footer;