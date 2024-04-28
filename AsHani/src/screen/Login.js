import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
//import firestore from '@react-native-firebase/firestore';
const Login = () => {
/*
  useEffect(() => {
    firestore()
    .collection('admin')
    .add({
      email: 'admin@gmail.com',
      password: 'admin@1234',
    })
    .then(() => {
      console.log('admin added!');
    });

*/
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Login</Text>
      <TextInput style={styles.inputStyle} placeholder={'Enter Email Id'}/>
      <TextInput style={styles.inputStyle} placeholder={'Enter  Password'}/>
      <TouchableOpacity style={styles.loginBtn}>       
       <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;

const styles=StyleSheet.create({
  container:{
    flex: 1,

  },

  title:{
    fontSize: 20,
    fontWeight: '800',
    color:'#000',
    marginTop:100,
    alignSelf:'center',
  },
  inputStyle: {

    paddingLeft: 20,
    height :50,
    alignSelf:'center',
    marginTop: 30,
    borderWidth:0.5,
    borderRadius: 10,
    width:'90%',
  },

  loginBtn: {
    backgroundColor: 'red',
    width:'90%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 50,
    justifyContent:'center',
    alignItems:'center',

  },

  btnText:{

    fontSize:18,
    fontWeight:'600',
    color:'#000',
  },
})