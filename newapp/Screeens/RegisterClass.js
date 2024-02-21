import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image,Button,Modal, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import { ScrollView } from 'react-native-gesture-handler';
const Registerclass = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [nric, setNric] = useState('');
  const [address, setAddress] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [parentName, setParentName] = useState('Father');
  const [householdIncome, setHouseholdIncome] = useState('0-1,000');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [photo, setPhoto] = useState(null);
  const [spmSubjects, setSpmSubjects] = useState('');
  const [spmGrades, setSpmGrades] = useState('');
  const [spmYear, setSpmYear] = useState('');
  const [stpmSubject, setStpmSubject] = useState('');
  const [totalPayment, setTotalPayment] = useState(0);
  const Item = Picker.Item



  const [picture,setPicture] = useState("")
    const [modal,setModal] = useState(false)
    const [enableshift,setenableShift] = useState(false)

    const pickFromGalleryWithPermissions = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
      if (status === "granted") {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
          });
    
          if (!result.canceled) {
            const image = result.assets[0]; // Access image from "assets" array
    
            const newFile = {
              uri: image.uri,
              type: `test/${image.uri.split(".").pop()}`, // Use `pop()` instead of indexing
              name: `test.${image.uri.split(".").pop()}`,
            };
    
            handleUpload(newFile);
            setModal(false);
          }
        } catch (error) {
          console.error(error.message); // handle error
        }
      } else {
        Alert.alert("Permission denied for accessing the gallery");
      }
    };

    const pickFromCameraWithPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
    
      if (status === "granted") {
        try {
          const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
          });
          if (!result.canceled) {
              const image = result.assets[0]; // Access image from "assets" array
      
              const newFile = {
                uri: image.uri,
                type: `test/${image.uri.split(".").pop()}`, // Use `pop()` instead of indexing
                name: `test.${image.uri.split(".").pop()}`,
              };
      
              handleUpload(newFile);
              setModal(false);
            }
          } catch (error) {
            console.error(error.message); // handle error
          }
      } else {
        Alert.alert("Permission denied for accessing the camera");
      }
    };

    const handleUpload = (image)=>{
      const data = new FormData()
      data.append('file',image)
      data.append('upload_preset','complaint')
      data.append("cloud_name","daqnlvhjm")

      fetch("https://api.cloudinary.com/v1_1/daqnlvhjm/image/upload",{
          method:"post",
          body:data
      }).then(res=>res.json()).
      then(data=>{
          setPicture(data.url)
          alert("images loaded uploaded")
          setModal(false)
      }).catch(err=>{
          Alert.alert("error while uploading")
      })
 }



  // Functions for handling form input changes and submissions go here
  const handlesubmit=()=>{
    console.log(name,age,nric,address,schoolName,parentName,householdIncome,phoneNumber,photo,spmSubjects,spmYear,stpmSubject,totalPayment);
  }
  return (
    <ScrollView class="home_cont" >
      <Text>Name:</Text>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter Name"
        class="inputStyle"
      />

      <Text>Age:</Text>
      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        placeholder="Enter Age"
        keyboardType="numeric"
        class="inputStyle"
      />

      <Text>NRIC:</Text>
      <TextInput
        value={nric}
        onChangeText={(text) => setNric(text)}
        placeholder="Enter NRIC"
        class="inputStyle"
      />

      <Text>Address:</Text>
      <TextInput
        value={address}
        onChangeText={(text) => setAddress(text)}
        placeholder="Enter Address"
        class="inputStyle"
        multiline
      />

      <Text>School Name:</Text>
      <TextInput
        value={schoolName}
        onChangeText={(text) => setSchoolName(text)}
        placeholder="Enter School Name"
        class="inputStyle"
      />

      <Text>Parent's Name:</Text>
      <Picker

          testID="basic-picker"
          selectedValue={parentName}
          style={{ backgroundColor: 'white', zIndex: 9999, elevation: 1000, }}
          onValueChange={(v) => setParentName(v)}>
          <Item label="Father" value="Father" style={{color:"black",fontSize:15}} />
          <Item label="Mother" value="Mother" style={{color:"black",fontSize:15}}/>
          <Item label="Guardian" value="Guardian" style={{color:"black",fontSize:15}}/>
        </Picker>

      <Text>Household Income:</Text>
      <Picker
       style={{ backgroundColor: 'white', zIndex: 9999, elevation: 1000, }}
        selectedValue={householdIncome}
        onValueChange={(itemValue) => setHouseholdIncome(itemValue)}
      >
        <Picker.Item label="0-1000" value="0-1000" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="1001-2000" value="1001-2000" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="5000 & above" value="5000 & above" style={{color:"black",fontSize:15}}/>
        {/* Add other income ranges */}
      </Picker>

      <Text>Phone Number:</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
        class="inputStyle"
      />







      {/* Photo attachment */}


      <Button 
             style={styles.btn}
              title="Upload Image"
              onPress={() => setModal(true)}>
                    
             </Button>
             
             <Button 
              title="Upload"
              onPress={() => submitData()}>   
             </Button>
             
     
             
             <Modal
             animationType="slide"
             transparent={true}
             visible={modal}
             onRequestClose={()=>{
                 setModal(false)
             }}
             >
              <View style={styles.modalView}>
                  <View style={styles.modalButtonView}>
                        <Button 
                        //  theme={theme}
                        title='camera'
                         onPress={() =>pickFromCameraWithPermissions()}>
                                
                        </Button>
                        <Button 
                        //  theme={theme}
                         title=' gallery'
                          onPress={() => pickFromGalleryWithPermissions()}>
                               
                        </Button>
                  </View>
                <Button 
                 title='cancel'
                onPress={() => setModal(false)}>
                        
                </Button>
              </View>
             </Modal>
      {/* Your logic for attaching and displaying photos goes here */}

      {/* SPM Subjects and Results */}
      {/* Your logic for SPM subjects and results dropdowns goes here */}

      <Text>SPM Year:</Text>
      <Picker
        style={{ backgroundColor: 'white', zIndex: 9999, elevation: 1000, }}
        selectedValue={spmYear}
        onValueChange={(itemValue) => setSpmYear(itemValue)}
      >
        <Picker.Item label="2023" value="2023" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="2022" value="2022" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="2021" value="2021" style={{color:"black",fontSize:15}}/>
      </Picker>
      <Text>SPM Subject:</Text>
      <Picker
        style={{ backgroundColor: 'white', zIndex: 9999, elevation: 1000, }}
        selectedValue={spmSubjects}
        onValueChange={(itemValue) => setSpmSubjects(itemValue)}
      >
        <Picker.Item label="Tamil" value="Tamil" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="English" value="English" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="Hindi" value="Hindi" style={{color:"black",fontSize:15}}/>
      </Picker>
      <Text>SPM Subject To register:</Text>
      <Picker
        style={{ backgroundColor: 'white', zIndex: 9999, elevation: 1000, }}
        selectedValue={spmSubjects}
        onValueChange={(itemValue) => setSpmSubjects(itemValue)}
      >
        <Picker.Item label="Tamil" value="Tamil" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="English" value="English" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="Hindi" value="Hindi" style={{color:"black",fontSize:15}}/>
      </Picker>

      {/* STPM Subject */}
      {/* Your logic for STPM subject dropdown goes here */}

      {/* Total Payment Display */}
      <Text>Total Payment: {totalPayment}</Text>

      {/* Submit Button */}
      <TouchableOpacity onPress={handlesubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles=StyleSheet.create({
  home_cont:{
    padding:10,
    flex:1,
    gap:10,
    backgroundColor:"red"
    
  },

  // inputStyle:{
  //     margin:"4%",
  //     borderWidth:2,
  //     borderColor: 'black',
  //     backgroundColor: '#f5f5f5',
  //     padding:20,

  // },
  // modalView:{
  //     position:"absolute",
  //     bottom:2,
  //     width:"100%",
  //     backgroundColor:"white"

  // },
  // modalButtonView:{
  //     flexDirection:"row",
  //     justifyContent:"space-around",
  //     padding:10
  // },btn:{
  //     backgroundColor:"blue"
  // },
  // textarea:{
  //     height:"30%",
  //     borderWidth:2,
  //     borderColor:"black",
  //     margin:"4%"
  // },
  // lable:{
  //   fontSize:25,
  //   paddingLeft:20
  // }
})
export default Registerclass;
