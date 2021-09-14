import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/Screens/HomeScreen';
import OrderScreen from './src/Screens/OrderScreen';
import ShopScreen from './src/Screens/ShopScreen';
import TicketScreen from './src/Screens/TicketScreen';
import OtherScreen from './src/Screens/OtherScreen';
import { createStore } from "redux";
import { Provider } from "react-redux";
import AllReducer from "./src/reducers/AllReducer";
const Tab = createBottomTabNavigator();
let store = createStore(AllReducer);
export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;
              let colorForcused;
              if (route.name === 'HomeScreen') {
                iconName = focused ? 'home-outline' : 'home-outline';
                colorForcused = focused ? '#FCBF84' : '#787878'
              } else if (route.name === 'OrderScreen') {
                iconName = focused ? 'coffee' : 'coffee';
                colorForcused = focused ? '#FCBF84' : '#787878'
              } else if (route.name === 'ShopScreen') {
                iconName = focused ? 'cart-outline' : 'cart-outline';
                colorForcused = focused ? '#FCBF84' : '#787878'
              } else if (route.name === 'TicketScreen') {
                iconName = focused ? 'ticket-confirmation-outline' : 'ticket-confirmation-outline';
                colorForcused = focused ? '#FCBF84' : '#787878'
              } else if (route.name === 'OtherScreen') {
                iconName = focused ? 'menu' : 'menu';
                colorForcused = focused ? '#FCBF84' : '#787878'
              }
              return <Material name={iconName} size={25} color={colorForcused} style={{ fontWeight: 900 }} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { height: 60, justifyContent: 'space-between' },
            tabBarLabelStyle: { fontSize: 14, marginBottom: 5 },
            headerShown: false
          })}
        >
          <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: 'Trang chủ' }} />
          <Tab.Screen name="OrderScreen" component={OrderScreen} options={{ tabBarLabel: 'Đặt hàng' }} />
          <Tab.Screen name="ShopScreen" component={ShopScreen} options={{ tabBarLabel: 'Cửa hàng' }} />
          <Tab.Screen name="TicketScreen" component={TicketScreen} options={{ tabBarLabel: 'Tích điểm' }} />
          <Tab.Screen name="OtherScreen" component={OtherScreen} options={{ tabBarLabel: 'Khác' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
