import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/splash';
import { RootStackParamList } from './src/types';
import { StyleSheet, Text, View } from 'react-native';
import MainNav from './src/navigation/mainNav'
import SignUpScreen from './src/screens/signup';
import LoginScreen from './src/screens/login';
import ResetPasswordScreen from './src/screens/resetPassword';
import ForgotPasswordScreen from './src/screens/forgotPassword';
import HomeScreen from './src/screens/home';


// export default function App() {
//   return (
//     <MainNav />
//   );
// }
const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Reset" component={ResetPasswordScreen} options={{headerShown:false}}/>

        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
