import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
const styles=StyleSheet.create({
   container:{
       color:'white',
       fontSize:9.5,
       fontWeight:'bold',
       flexDirection:'row',
       marginLeft:8,
       marginTop:10
   }
})
const ImageAbout=()=>{
    return(
     <View style={styles.container}>
         <Text style={styles.container}>Action Thriller </Text>
         <Text style={styles.container}>. Action & Adventure</Text>
         <Text style={styles.container}>. Mistaken Indentity</Text>
         <Text style={styles.container}>. Organized Crime</Text>
     </View>
    )
}
export default ImageAbout