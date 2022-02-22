import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native';
const styles=StyleSheet.create({
    container:{
        marginTop:15,
        flexDirection:'row',
        backgroundColor:'black',
        
    },
    textview:{
        color:'white',
        backgroundColor:'black',
        marginLeft:40,
        fontWeight:'bold'
    },
    textvie:{
        color:'white',
        backgroundColor:'black',
        marginLeft:50,
        fontWeight:'bold'
    }
})
const HeaderLower=()=>{
    return(
  <View style={styles.container}>
      <View>
       <TouchableOpacity>
   <Text style={styles.textview}>TV Shows</Text>
   </TouchableOpacity>
   </View>
   <View>
   <TouchableOpacity>
   <Text style={styles.textvie}>Movies</Text>
   </TouchableOpacity>
   </View>
   <View>
   <TouchableOpacity>
   <Text style={styles.textvie}>Categories</Text>
   </TouchableOpacity>
   </View>
  </View>
    )
}
export default HeaderLower;
