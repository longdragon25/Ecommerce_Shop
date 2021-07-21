import * as actions from "../../Redux/Actions/cartActions";

import {
    Body,
    Container,
    H1,
    Left,
    ListItem,
    Right,
    Text,
    Thumbnail
} from "native-base";
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import React,{ useState } from 'react'

import CartItem from './CartItem'
import EasyButton from "../../Shared/StyledComponents/EasyButton"
import Icon from "react-native-vector-icons/FontAwesome";
import { SwipeListView } from 'react-native-swipe-list-view'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

var { height, width } = Dimensions.get("window");

const Cart = (props) => {
    const item = useSelector(state => state.cartItems)
    const dispatch = useDispatch();

    const [totalPrice, setTotalPrice] = useState()

    var total = 0
    item.forEach(cart => {
     return (total+=cart.product.price)        
    });

    return (
        <>
        {item.length ? (
              <Container>
              <H1 style={{ alignSelf: "center" }}>Cart</H1>
              <SwipeListView
                data={item}
                renderItem={(data) => (
                 <CartItem item={data} />
                )}
                renderHiddenItem={(data) => (
                  <View style={styles.hiddenContainer}>
                    <TouchableOpacity 
                    style={styles.hiddenButton}
                    onPress={() => 
                        dispatch(actions.removeFromCart(data.item))
                        // console.log(data.item)
                    }
                    >
                      <Icon name="trash" color={"white"} size={30} />
                    </TouchableOpacity>
                  </View>
                )}
                disableRightSwipe={true}
                previewOpenDelay={3000}
                friction={1000}
                tension={40}
                leftOpenValue={75}
                stopLeftSwipe={75}
                rightOpenValue={-75}
              />
              <View style={styles.bottomContainer}>
                <Left>
                    <Text style={styles.price}>$ {total}</Text>
                </Left>
                <Right>
                    <EasyButton
                      danger
                      medium
                      onPress={() => dispatch(actions.clearCart())}
                    >
                      <Text style={{ color: 'white' }}>Clear</Text>
                    </EasyButton>
                </Right>
                <Right>
                  {/* {context.stateUser.isAuthenticated ? ( */}
                    <EasyButton
                      primary
                      medium
                      onPress={() => props.navigation.navigate('Checkout')}
                    >
                    <Text style={{ color: 'white' }}>Checkout</Text>
                    </EasyButton>
                  {/* ) : (
                    <EasyButton
                      secondary
                      medium
                      onPress={() => props.navigation.navigate('Login')}
                    >
                    <Text style={{ color: 'white' }}>Login</Text>
                    </EasyButton>
                  )} */}
                    
                </Right>
              </View>
            </Container>
        ) : (
            <Container style={styles.emptyContainer}>
                <Text>Look like your cart is empty</Text>
                <Text>Add products to your cart to get started</Text>
            </Container>
        )}
        </>
    )
}

const styles = StyleSheet.create({
    emptyContainer: {
      height: height,
      alignItems: "center",
      justifyContent: "center",
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        elevation: 20
    },
    price: {
        fontSize: 18,
        margin: 20,
        color: 'red'
    },
    hiddenContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      flexDirection: 'row'
    },
    hiddenButton: {
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: 25,
      height: 70,
      width: width / 1.2
    }
  });
export default Cart
