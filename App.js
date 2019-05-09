import { createStackNavigator, createAppContainer } from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './store'

import React from 'react'

import HomeScreen from './screens/HomeScreen'
import LandingPage from './screens/LandingPage'
import LinksScreen from './screens/LinksScreen'
import SettingsScreen from './screens/SettingsScreen'
import Tutors from './screens/Tutors'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Landing: LandingPage,
  Links: LinksScreen,
  Settings: SettingsScreen,
  Tutors: Tutors,
}, 
{
  initialRouteName: 'SignIn',
  headerMode: 'none'
})

const AppContainer = createAppContainer(AppNavigator)

function App(){
 return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>  
  )
}

export default App;