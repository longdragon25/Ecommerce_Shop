import { Badge, Text } from "native-base";

import React from 'react'
import { StyleSheet } from "react-native";
import { useSelector } from 'react-redux'

const CartIcon = () => {
    const data = useSelector(state => state.cartItems)
    return (
        <>
        {data.length ? (
          <Badge style={styles.badge}>
            <Text style={styles.text}>{data.length}</Text>
          </Badge>
        ) : null}
        </>
    )
}

const styles = StyleSheet.create({
    badge: {
      width: 25,
      position: "absolute",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      top: -4,
      right: -15,
    },
    text: {
      fontSize: 12,
      width: 100,
      fontWeight: "bold",
    },
  });

export default CartIcon
