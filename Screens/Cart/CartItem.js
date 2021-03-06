import { Body, Left, ListItem, Right, Text, Thumbnail } from "native-base";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const CartItem = (props) => {
  const data = props.item.item.product;
  return (
    <ListItem style={styles.listItem} key={Math.random()} avatar>
      <Left>
        <Thumbnail
          source={{
            uri: data.image
              ? data.image
              : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
          }}
        />
      </Left>
      <Body style={styles.body}>
        <Left>
          
          <Text>{data.name}</Text>
        </Left>
        <Right>
          <Text>$ {data.price}</Text>
        </Right>
      </Body>
      {/* <TouchableOpacity style={{width:40,backgroundColor:"blue",height:40}} onPress={()=> console.log(data)}/> */}
    </ListItem>
  );
};

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    body: {
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default CartItem;