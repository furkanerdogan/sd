import * as React from 'react';
import { Component } from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack'


import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import SifreUnut from '../screens/SifreUnut';

const AuthStack = createStackNavigator();


const Auth = () => {
    return (

        <AuthStack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <AuthStack.Screen name={'SignIn'} component={SignIn} />
            <AuthStack.Screen name={'SignUp'} component={SignUp} />
            <AuthStack.Screen name={'SifreUnut'} component={SifreUnut} />

        </AuthStack.Navigator>
    );
}

export default Auth;
