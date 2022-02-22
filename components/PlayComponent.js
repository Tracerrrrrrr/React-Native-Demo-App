import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
const styles=StyleSheet.create({
    text:{
    color:'white',
    marginTop:10
    }
})
const PlayComponent=()=>{
      return(
          <Text style={styles.text}></Text>
      )
}
export default PlayComponent;