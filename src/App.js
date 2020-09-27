import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerTitleAlign:'center',
        headerStyle:{
          backgroundColor:'#fff',
          height:0
        },
        headerTintColor:'black',
        headerTitleStyle: {
          fontWeight:'bold',
          opacity:0
        },
     }}
     >
        <Stack.Screen 
           name="HomeScreen"
           component={HomeScreen}
           
           />
        <Stack.Screen 
           name="SignUp"
           component={SignUp}
           options={
             {title:'SignUp'},
             {headerLeft:null}
           }
           />
        <Stack.Screen 
           name="SignIn"
           component={SignIn}
           options={
             {title:'SignIn'},
             {headerLeft:null}
           }
           />
           <Stack.Screen 
           name="Dashboard"
           component={Dashboard}
           options={
             {title:'Dashboard'},
             {headerLeft:null}
           }
           />
      </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;