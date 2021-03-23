import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from "./src/store/store";
import NaviRoot from "./src/navigation/Root"
import BotTabNav from "./src/navigation/BottomTab"
import { Admin_Urun_Ekle_Stack } from "./src/screens/Admin_Urun_Ekle";



class App extends Component {
  state = {
    items: [],
    isLoaded: true,
  }

  render() {
    var { items, isLoaded } = this.state;
    if (isLoaded == true) {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SafeAreaView style={{ flex: 1 }}>
              <NavigationContainer>
                {/* <NaviRoot /> */}
                <Admin_Urun_Ekle_Stack />
              </NavigationContainer>
            </SafeAreaView>
          </PersistGate>
        </Provider>
      );
    }

  }
}

export default App;

