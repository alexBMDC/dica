import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Dica from './src/ui/tutorial/dica';

export default class App extends Component{
  render() {
    
    return(    
      <View style={styles.main}>
      <Dica locations = {
        [{id:'1', image: require('./src/assets/Login/logotipo.png')},
        {id:'2', image: require('./src/assets/Tutorial/createPost.png')}]
      }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#FFFFFF'
  }
})