
import { StyleSheet, Image, Text, View } from 'react-native';
import profile from '@/assets/images/download.jpeg';
import React from 'react';


export default function TabOne() {
  return(
  <View style ={styles.view}>
    <Image source={profile} style = {styles.PFP}></Image>
    <Text style = {styles.text}> Welcome To Eri's App </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    color: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text:{
    color: 'coral',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    fontFamily: 'Norwester'
                                   
  },
    PFP: {
    height: 178,
    width: 290,
    borderRadius: 100,
    bottom: 100,
    shadowColor: "000",
    shadowOffset: {width: 0,height: 100},
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 10,

  },
}); 
 
