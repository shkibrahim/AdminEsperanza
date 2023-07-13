import React from 'react';
import { useEffect, useState } from 'react';

import Video from 'react-native-video';
import {
  View,
  Text,
  TouchableOpacity,KeyboardAvoidingView ,
  StyleSheet,
  Pressable,
  ScrollView,Image,
  ImageBackground,
  TextInput

} from 'react-native';
// import {  TextInput} from 'react-native-paper';
// import { TextInput } from 'react-native-material-ui';
const Login = ({ navigation }) => {
 
    const [isChecked, setChecked] = useState(false);
  
    const handleToggleCheckbox = () => {
      setChecked(!isChecked);
    };
  





  return (
    <View style={{ backgroundColor:'white', height:'100%', position:'absolute', width:'100%'}}>
        {/* <View style={{}}></View> */}
    <View style={{flex:.5,  justifyContent:"space-between", flexDirection:'row' , alignItems:'center', marginTop:16,marginRight:10,marginBottom:60 ,}}>
        {/* <View style={{backgroundColor: '#ff5400', width:40, height:40, borderRadius:30 , alignContent:'center',marginRight:50, justifyContent:"center", alignItems:'center'}}>

        <Image source={require("../Images/drawer.png")} style={{height:'40%', width:'40%'}}/>
        </View> */}
      <Image source={require("../Images/mainlogo.png")} style={{height:'40%', width:'30%'}}/>
      <View style={{backgroundColor: '#0f034b', width:40, height:40, borderRadius:30 , alignContent:'center', 
      marginLeft:50,justifyContent:"center", alignItems:'center'}}>

<Image source={require("../Images/drawer.png")} style={{height:'40%', width:'30%'}}/>
</View>
      </View>
      
       <View style={{ flex:3, borderRadius:10, width:"95%" , alignSelf:'center' ,alignItems:"center" ,paddingTop:6, position:'relative' }}>

       <Image source={require("../Images/esperanzalogo.png")} style={{height:'40%', width:'100%'}}/>
       </View>
       {/* <Text style={{color: '#ff5400', fontSize:14, alignSelf:"center"}}> Enter your credentials provided by the Company  </Text> */}
       {/* <Text style={{color: '#ff5400', fontSize:14, alignSelf:"center"}}>to Login in to your account. </Text> */}

        {/* <TouchableOpacity  style={{backgroundColor:'red' ,height:'100%', width:'50%', borderRadius:10}}>

<Text>ok </Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={{backgroundColor:'blue' ,height:'100%',width:'50%',  borderBottomLeftRadius: 350, overflow: 'hidden', borderRadius:10}}>
        <Image
        source={{ uri: 'https://www.shopmanto.com/cdn/shop/products/DSC03002_800x.jpg?v=1680944976' }}
        style={{    height: '100%',
        width: '100%',
        alignSelf: "stretch",}}
      />
         
            </TouchableOpacity> */}
        {/* <View style={{backgroundColor:'red' ,height:'100%'}}></View>
        <View  style={{backgroundColor:'blue', height:'100%'}}></View> */}
      {/* <TextInput
        label="Email"
        // value={email}
        // onChangeText={(text) => setEmail(text)}
        mode="outlined"
        style={{ marginBottom: 16,}}
      /> */}
      {/* <TextField label="Email" />
      <TextField label="Password" secureTextEntry /> */}
     
      <View style={{flex:9 , backgroundColor:'#0f034b',borderTopRightRadius:70, borderTopLeftRadius:70,  }}>

        <Text style={{fontSize:26 , paddingTop:20,marginLeft:20, color:"white"}} > Welcome </Text>
        <Text style={{color: '#ff5400', fontSize:12, alignSelf:"flex-start",marginLeft:29, marginBottom:50}}>Enter Details to Login  </Text>


        {/* <ScrollView> */}
        <Text style={{marginLeft:40,color:"white", fontWeight:"bold"}}>User ID </Text>
    {/* <KeyboardAvoidingView style={{ flex: 1,
    // justifyContent: 'center',
    marginBottom:30,
    paddingHorizontal: 30,}}> */}
      <View>
        <TextInput style={{   height: 40,width:'85%',
        alignSelf:'center',
    // borderColor: 'gray',
    color:'white',
    // borderWidth: 1,
    marginBottom:20,
    borderColor:'gray',
    borderBottomWidth:1,
   
    paddingHorizontal: 10,}}  
    placeholder='Enter User ID'
    placeholderTextColor= 'gray'/>
      </View>
    {/* </KeyboardAvoidingView> */}


        <Text style={{marginLeft:40,color:"white",fontWeight:"bold"}}>Password </Text>


   
    {/* <KeyboardAvoidingView style={{ flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 30,}} behavior="position"> */}
      <View>
        <TextInput 
      style={{   height: 40,
    // borderColor: 'gray',
    // borderWidth: 1,
    borderColor:'gray',
    color:'white',
    width:'85%',
    alignSelf:'center',
    borderBottomWidth:1,
   
   }} 
    placeholder='Enter Password'
    placeholderTextColor= 'gray' />
    
      </View>
    {/* </KeyboardAvoidingView> */}

    <View style={{flexDirection:'row', marginBottom:100}}>
    <Text style={{marginLeft:30,fontSize:12,marginTop:12, color:"gray"}}>Remember me</Text>
    <TouchableOpacity style={styles.checkboxContainer} onPress={handleToggleCheckbox}>


      <View style={[styles.checkbox, isChecked ? styles.checked : null]}  >

      <Image source={require("../Images/tick1.png")} style={{height:'120%', width:'120%'}}/>
        {/* <Text>h</Text> */}
      </View>
      {/* <Text style={styles.label}>Check me</Text> */}
    </TouchableOpacity>
    </View>
    
    {/* </ScrollView> */}
    
    <TouchableOpacity
          style={{
            backgroundColor: '#ff5400',
            width: '60%',
            borderRadius: 39,
            height: 55,
            marginBottom:32,
            
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf:'center'
            
          }}
          onPress={() => navigation.replace('Home')}
        >
         
            <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>Login</Text>
        
          </TouchableOpacity>

      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ff5400',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop:12,
    marginLeft:10,
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    height: 20,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 4,
    // marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  checked: {
    backgroundColor: 'white'},
  button: {
    // backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 40,
  },
});
