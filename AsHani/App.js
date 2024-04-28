import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/screen/Splash';
import Login from './src/screen/Login';
import { useEffect , useState } from 'react';

export default function App() {

  const[isShowSplash,setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout (() =>{
      setIsShowSplash(false);
    }, 3000);
  })
  return (
    <>{isShowSplash ? <Splash /> :<Login/>}</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
