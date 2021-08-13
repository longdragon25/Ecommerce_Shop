import { Text, View } from 'react-native'

import Login from '../Screens/User/Login'
import React from 'react'
import Register from '../Screens/User/Register'
import UserProfile from '../Screens/User/UserProfile'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const UserNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="User Profile"
                component={UserProfile}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default UserNavigator
