import React from 'react';
import { useEffect, useState,useRef } from 'react';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {settings-applications} from 'react-native-vector-icons/MaterialIcons';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from "react-native-modal";
// import {fa-regular fa-house-blank} from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageGrid from '@baronha/react-native-image-grid';
import Carousel from 'react-native-snap-carousel';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,Animated ,Button,
  Pressable,Dimensions,
  ScrollView,Keyboard,
  Image,                                  
  ImageBackground,
} from 'react-native';
import { openPicker } from '@baronha/react-native-multiple-image-picker';
// import {  TextInput} from 'react-native-paper';
// import { TextInput } from 'react-native-material-ui';
const AddProducts = ({ navigation }) => {

  //   const [images, setImages] = useState([]);

  // const onPressImage = (item, index) => {
  //   console.log(item, index);
  
  // };

  // const onPicker = async () => {
  //   try {
  //     const singleSelectedMode = false;

  //     const response = await openPicker({
  //       selectedAssets: images,
  //       isExportThumbnail: true,
  //       // maxVideo: 1,
  //       doneTitle: 'Done',
  //       singleSelectedMode,
  //       isCrop: true,
  //     });

  //     const crop = response.crop;

  //     if (crop) {
  //       response.path = crop.path;
  //       response.width = crop.width;
  //       response.height = crop.height;
  //     }

  //     setImages(response);
  //     console.log(images)
  //   } catch (e) {}
  // };

  const iconFontStyles = `@font-face {
    src: url(${iconFont});
    font-family: FontAwesome;
  }`;
  state = {
    visibleModal: null,
  };
  const windowHeight = Dimensions.get('window').height;

  const [modalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };

  const scrollViewRef = useRef(null);

  useEffect(() => {
    const delay = 5000; // Delay between stopping at each component (in milliseconds)
    const scrollDuration = 9000; // Duration for a complete scroll (in milliseconds)
    const componentWidth = 10000; // Width of each component

    let timeoutId;

    const startScrollAnimation = () => {
      const scrollX = scrollViewRef.current?.contentOffset?.x || 0;
      const componentIndex = Math.floor(scrollX / componentWidth);
      const targetOffset = (componentIndex + 10) * componentWidth;

      scrollViewRef.current?.scrollTo({ x: targetOffset, animated: true });

      timeoutId = setTimeout(() => {
        startScrollAnimation();
      }, scrollDuration + delay);
    };
  

    startScrollAnimation(); // Start the initial animation

    // Clean up the timeout on unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleScrollEnd = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const contentOffsetX = contentOffset.x;
    const contentWidth = contentSize.width;
    const containerWidth = layoutMeasurement.width;
  
    if (contentOffsetX + containerWidth >= contentWidth) {
      // Reached the end of ScrollView, scroll back to the beginning
      scrollViewRef.current.scrollTo({ x: 0, animated: true });
    }
  };

    const [isChecked, setChecked] = useState(false);
  
    const handleToggleCheckbox = () => {
      setChecked(!isChecked);
    };
  


    const [isKeyboardActive, setIsKeyboardActive] = useState(false);

    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => setIsKeyboardActive(true),
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => setIsKeyboardActive(false),
      );
  
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);





    const [Quantity, setQuantity] = useState();
    const [Price, setPrice] = useState();
    const [Name, setName] = useState();
    const [ProductCode, setProductCode] = useState();
    const [productlist, setproductlist] = useState([]);
    const [edit,setEdit]=useState(null);

    const Add = () => {
     
        if (Quantity == null || Price== null ||  ProductCode == null || Name== null){
            
alert("Fill the details")
        }
    else {
        console.log('hll')
        const AddProduct = {
            key: Math.random().toString(),
            Quantity: Quantity,
            Price:Price,
            Name:Name,
            ProductCode:ProductCode,
        
        }
        setproductlist((oldList) => [...oldList, AddProduct])
        setQuantity('')
        setName('')
        setPrice('')
        setProductCode('')
     
    }
}
const sortedData = productlist.sort((a, b) => a - b);




const[Images,setImages] =useState([]);

const openImagePicker = () =>{
  let ImageList =[];
  ImagePicker.openPicker({
    multiple: true,
    waitAnimationEnd :false,
    includeExif:true,
    forceJpg:true,
    compressImageQuality: 0.8,
    maxFiles: 5,
    mediaType: 'any',
    includeBase64:true,
  })
  .then (response =>{
    console.log('Response:' ,response);
  })
};
const _renderItem =({item,index})=>{
  return(
<View style={styles.slide} key={index}>
<Text style={styles.title}>{ item.title }</Text>

<Image style={{width:'88%', borderRadius:15,height:200}} source={{uri: item.path}}/>
<View style={{marginTop:10, flexDirection:'row', alignItems:"center"}}></View>
</View>


  )
}


  return (
    <View style={{ backgroundColor:'#333333', height:'100%', position:'absolute', width:'100%'}}>
         <Modal
        visible={modalVisible}
        // animationInTiming= '400'
        // animationType="slide"
    
        animationIn={'slideInLeft'}
        animationOut={'slideOutRight'}
        animationInTiming={2000}
        animationOutTiming={2000}
        // animationIn= "slideInUp"
        // animationOut="slideOutDown"
        transparent={true}
        onRequestClose={toggleModal}
     style={{ width:'100%',marginTop:0, marginLeft:0 }} >
        <TouchableOpacity
          style={styles.modalBackground}
          // activeOpacity={1}
          onPressOut={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={{flexDirection:'row', justifyContent:"space-between"}}>

              <View></View>
          <Image
          source={require('../Images/mainlogo.png')}
          style={{height: 20, width: '30%',  marginTop:'4%',marginLeft:'10%'}}
        />
            <View style={{ height:35, width:35, borderRadius:20,borderColor:"gray", borderWidth:0.5 ,marginTop:'2%',marginRight:'2%', justifyContent:'center', alignItems:'center'}}>
            <Image
            source={require('../Images/close.png')}
            style={{height: '100%', width: '100%'}}
          />
            </View>

            </View>


            <View style={{justifyContent:'space-evenly', marginTop:'8%', flexDirection:'row'}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
            <TouchableOpacity style={{ height:35, width:35, borderRadius:20,borderColor:"gray", borderWidth:0.5 , justifyContent:'center', alignItems:'center', marginBottom:'9%'}}>
            <Image
            source={require('../Images/home.png')}
            style={{height: '44%', width: '44%'}}
          />

            </TouchableOpacity>
            <Text style={{color:'black', fontSize:12}}>Home</Text>
            </View>

<View style={{flexDirection:'column', alignItems:'center'}}>
            <TouchableOpacity style={{ height:35, width:35, borderRadius:20,borderColor:"gray", borderWidth:0.5 , justifyContent:'center', alignItems:'center',marginBottom:'6%'}}  onPress={handleToggleCheckbox}>
            <View style={[styles.checkbox, isChecked ? styles.checked : null]}  >

      <Image source={require("../Images/tick2.png")} style={{height:'70%', width:'70%'}}/>
        {/* <Text>h</Text> */}
      </View>
            </TouchableOpacity>
            <Text style={{color:'black', fontSize:12}}>DarkTheme</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
            <TouchableOpacity style={{ height:35, width:35, borderRadius:20,borderColor:"gray", borderWidth:0.5 , justifyContent:'center', alignItems:'center',marginBottom:'9%'}}>
            <Image
            source={require('../Images/profile.png')}
            style={{height: '44%', width: '44%'}}
          />
            </TouchableOpacity>
            <Text style={{color:'black', fontSize:12}}>Profile</Text>
            </View>

            <View style={{flexDirection:'column', alignItems:'center'}}>
            <TouchableOpacity style={{ height:35, width:35, borderRadius:20,borderColor:"gray", borderWidth:0.5 , justifyContent:'center', alignItems:'center',marginBottom:'9%'}}
            onPress={() => navigation.replace('Login')}>
            <Image
            source={require('../Images/logout.png')}
            style={{height: '44%', width: '44%'}}
          />
            </TouchableOpacity>
            <Text style={{color:'black', fontSize:12}}>Logout</Text>
            </View>

            </View>
            {/* <Text style={styles.modalText}>Hello!</Text>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>Hide modal</Text>
            </TouchableOpacity> */}
          </View>
        </TouchableOpacity>
      </Modal>
   
        {/*Header*/}
    <View style={{  justifyContent:"space-between", flexDirection:'row' , alignItems:'center', marginTop:16,marginRight:10,marginBottom:20 ,}}>
     
      <Image source={require("../Images/mainlogodark.png")} style={{height:20, width:100}}/>
      <TouchableOpacity style={{backgroundColor: '#0f034b', width:40, height:40, borderRadius:30 , alignContent:'center', 
      marginLeft:50,justifyContent:"center", alignItems:'center'}}
      onPress={toggleModal}>

<Image source={require("../Images/drawer.png")} style={{height:'40%', width:'30%'}}/>
</TouchableOpacity>
    
      </View>
    

      {/* <ScrollView
       style={{height:"10%"}}>
        <View style={{ height:140 }}>
          <Image
          source={images} style={{height:'70%', width:'70%'}} */}
            {/* // dataImage={Array.isArray(images) ? images : [images]}
            // onPressImage={onPressImage}
            // containerStyle={{}}
            // spaceSize={10}
            // containerStyle={{justifyContent:'flexstart'}}
            // width={Dimensions.get("window").width-10}
            // height = {Dimensions.get("window").height-1000}
            // sourceKey={'path'}
            // videoKey={'type'}
            // imagekey= {'type'}
            // imageURLKey ={'thumbnail'}
            // prefixPath={'file://'}
            // conditionCheckVideo={'video'}
            // videoURLKey={'thumbnail'}
          /> */}
          {/* <Text>{item}</Text>
          <Text>{index}</Text> */}
        
        {/* </View>
       
    
      </ScrollView> */}


      <TouchableOpacity style={{}} onPress={openImagePicker}>
            <Text style={{color:"red"}}>Open Picker</Text>
          </TouchableOpacity>











<View style={{ height:60, width:'99%', backgroundColor:'white' ,alignSelf:'center', justifyContent:'center', borderTopStartRadius:30, borderTopEndRadius:30}}> 
<View style={{flexDirection:'row', justifyContent:'space-around'}}>

  <TouchableOpacity style={styles.bottom}   onPress={() => navigation.replace('Home')}>
<Icon name="home" color="grey"  size={30} light/>
<Text style={{color:'grey'}}>Home</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.bottom}>
<Icon name="shopping-bag" color="#ff5400"  size={30} light/>
<Text style={{color:'#ff5400'}}>Add Products</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.bottom}>
<Icon name="settings" color="grey"  size={30} light/>
<Text style={{color:'grey'}}>Settings</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.bottom}>

<Icon name="admin-panel-settings" color="grey"  size={30} light/>

<Text style={{color:'grey'}}>Profile</Text>
</TouchableOpacity>
</View >


{/* <FontAwesomeIcon icon="fa-regular fa-font-awesome" size={30} color="#900"/> */}
{/* <Icon name="fa-regular fa-basket-shopping" size={30} color="#900" /> */}

</View>
   
    </View>

  );
};

export default AddProducts;
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
  bottom:{
    alignItems:'center'
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
  container: {
    flex: 1,
    // backgroundColor: '#ff5400',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    // marginBottom: 20,
  },
  button: {
    // backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 40,
  },

  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    width:'100%',
    // height:180,
    borderRadius:20,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },

  modalContainer: {
    width: '100%',
    height: '24%',
    backgroundColor: '#fff',
borderRadius:20
  },
  modalText: {
    fontSize: 16,
    // marginBottom: 10,
  },
  closeButton: {
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  checkbox: {
    height:35, width:35, borderRadius:20,borderColor:"gray", borderWidth:0.5 , justifyContent:'center', alignItems:'center',marginBottom:'6%'
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
    backgroundColor: '#0079DE'},

});
