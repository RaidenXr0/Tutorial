import React from "react";
import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function App(){
  return (
    <View style = {{flex: 1}}>
      <MapView style = {StyleSheet.absoluteFill} provider={PROVIDER_DEFAULT}></MapView>
    </View>
  )
}