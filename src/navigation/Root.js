import * as React from 'react';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Auth from "./Auth";
import BotTabNav from "./BottomTab";
import { UrunDetayScreen } from "../screens/UrunDetay";
import { NavigationContainer } from '@react-navigation/native';
const rootStack = createStackNavigator();

const NaviRoot = () => {
    const [isLoaded, setIsLoaded] = useState(true);// bu işlemi appde yapıyorum şimdilik bunu değiştirebilirim.
    return (
        <rootStack.Navigator headerMode="none" screenOptions={{ animationEnabled: false }} mode="modal">
            {isLoaded ? (<rootStack.Screen name="BotTabNav" component={BotTabNav} />) : (<rootStack.Screen name="Auth" component={Auth} />)}
            <rootStack.Screen options={{ animationEnabled: true }} name="UrunDetayScreen" component={UrunDetayScreen} />
        </rootStack.Navigator>
    );
}
export default NaviRoot;