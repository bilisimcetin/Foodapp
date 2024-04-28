import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
//import logo from '../../assets/logo2.png'
import {colors, hr90} from '../globals/style'

const Splash =() => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AşHanı</Text>
      <View style={styles.logoout}>
        {/*<Image source={logo} style={styles.logo} />*/}
      
      
      </View>
      <View style={hr90}/>
      <Text style={styles.text}>Haydi! Sende AşHanı 'nı kullan ve gıda israfına dur de. </Text>
      <View style></View>
      <View style={hr90}/>

      {/*<View style={hr80}/>*/}
    {/*<View style = {styles.btnout}>
        <TouchableOpacity>
            <Text style = {styles.btnout}>Sign up</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Text style = {styles.btnout}>Log In</Text>
        </TouchableOpacity>
    
    </View>*/}


    </View>
  )
}

const styles = StyleSheet.create({
    container:{

        flex: 1,
        backgroundColor:'#ff4242',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems:'center'


    },
    title:{
      fontSize: 60,
      fontWeight:'400',
      color:'white',
      textAlign:'center',
      marginVertical: 10,
      

    },
    logoout: {
      marginVertical: 30, 
      width:"70%",
      height:"30%",
      alignItems:'center',
      //backgroundColor:'#fff',

    },

    /*logo: {

      width: '110%',
      height:'110%',
    },*/

    text: {
      fontSize: 18,
      width: '80%',
      color: colors.col1,
      textAlign:'center',
    },
})

export default Splash 
