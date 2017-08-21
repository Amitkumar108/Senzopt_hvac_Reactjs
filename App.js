import React, {Component} from 'react';
import { StyleSheet, Text,TextInput, View, Image , AppRegistry} from 'react-native';



//import NVD3Chart from "react-nvd3";



export default class App extends  Component {

  constructor(props){
    super(props);
    this.state={text:''};

  }

  render() {


    let pic = {
  uri: 'https://s-media-cache-ak0.pinimg.com/originals/b0/49/c6/b049c644b803ebf28485303d93d7eeaa.jpg'
};



    return (
      <View style={styles.container}>
      <TextInput style={{height:45, width:200}} placeholder="Type here plz" onChangeText={(text)=>this.setState({text})} />
       <Image source={pic}><Image/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:null,
    height:null,
    justifyContent: 'center',
  },
});


//const styles = StyleSheet.create({
  //backg: {
    //flex: 1,
    //width:null,
    //height:null,
    //justifyContent: 'center',
  //},
//});
