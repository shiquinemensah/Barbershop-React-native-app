import React from "react";
import { View, Text, Image, StyleSheet} from 'react-native'


const App = () => {
  return(
    <View style = {styles.container}>
      <Text style={styles.Text}>Hello world</Text>
      <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}></Image>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  Text:{
    fontSize: 30,
    color: 'blue',
  },

  img:{
    width: 100,
    height: 100,
    borderRadius: 50,
  }
});


export default App;