import ProductContainer from "../Screens/Products/ProductContainer";
import React from 'react'
import SingleProduct from "../Screens/Products/SingleProduct"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={ProductContainer}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Product Detail'
                component={SingleProduct}
                options={{
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack />;
}