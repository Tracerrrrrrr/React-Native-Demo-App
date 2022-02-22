import React from 'react'
import {View,Image,StyleSheet,Text} from 'react-native'
import { ScrollView } from 'react-native'
const styles=StyleSheet.create({
    container:{
        height:250,
        width:150,
        marginTop:10,
    },
    styleText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        marginLeft:10,
        marginTop:15

    },
    imageStyle:
    {
        height:300,
        width:100,
        marginTop:10
    }
})
const MovieList=()=>{
  return (
      <View>
          <Text style={styles.styleText}>Only On Netflix</Text>
           <ScrollView horizontal={true} >
          <Image style={styles.container} source={require('.././MovieListImages/1.jpg')}/>
          <Image style={styles.container} source={require('.././MovieListImages/2.jpg')}/>
          <Image style={styles.container} source={require('.././MovieListImages/3.jpg')}/>
          <Image style={styles.container} source={require('.././MovieListImages/4.jpg')}/>
          <Image style={styles.container} source={require('.././MovieListImages/5.jpg')}/>
          <Image style={styles.container} source={require('.././MovieListImages/6.jpg')}/>
          </ScrollView>
          <View>
              <Text style={styles.styleText}>Trending Now</Text>
          <ScrollView horizontal={true}>
              <Image style={styles.imageStyle} source={require('.././MovieListImages/7.jpg')}/>
              <Image style={styles.imageStyle} source={require('.././MovieListImages/8.jpg')}/>
              <Image style={styles.imageStyle} source={require('.././MovieListImages/9.jpg')}/>
              <Image style={styles.imageStyle} source={require('.././MovieListImages/10.jpg')}/>
              <Image style={styles.imageStyle} source={require('.././MovieListImages/11.jpg')}/>
              <Image style={styles.imageStyle} source={require('.././MovieListImages/12.jpg')}/>
              <Image style={styles.imageStyle} source={require('.././MovieListImages/13.jpg')}/>
              <Image style={styles.imageStyle} source={require('.././MovieListImages/14.jpg')}/>
              <Image style={styles.imageStyle} source={require('.././MovieListImages/15.jpg')}/>
              <Image style={styles.imageStyle} source={require('.././MovieListImages/16.jpg')}/>
          </ScrollView>
          </View>
      </View>
     
  )
}
export default MovieList;