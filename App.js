import { StyleSheet, Text, View ,Button,TextInput, Touchable} from 'react-native';
import HeaderLower from './components/HeaderLower'
import HeaderUpper from './components/HeaderUpper';
import ImageContainer from './components/ImageContainer';
import ImageAbout from './components/ImageAbout';
import { ScrollView } from 'react-native';
import MovieList from './components/MovieList';
import PlayComponent from './components/PlayComponent'
import Footer from './components/Footer';
export default function App() {
  return (
    <View style={{backgroundColor:'black'}}>
      <HeaderUpper/>
      <HeaderLower/>
      <ScrollView>
      <ImageContainer/>
      <ImageAbout/>
      <PlayComponent/>
      <MovieList/>
      </ScrollView>
      <Footer/>
    </View>
  );
}