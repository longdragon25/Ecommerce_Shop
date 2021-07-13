import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image 
            source={require("../assets/Logo.png")}
            resizeMode="contain"
            style = {{height:50}}
            />           
        </SafeAreaView>       
    )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection:"row",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
  });

export default Header
