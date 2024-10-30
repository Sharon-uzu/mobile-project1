import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Assets/Pages/Login';
import Home from './App/Assets/Pages/Home';
import Signin from './App/Assets/Pages/Signin';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      {/* <Home/> */}
      <Signin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
