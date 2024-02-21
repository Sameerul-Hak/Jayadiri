import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button, Modal, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import { ScrollView } from 'react-native-gesture-handler';
const RegisterAlumini = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [nric, setNric] = useState('');
  const [address, setAddress] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [parentType, setParentType] = useState('');
  const [householdIncome, setHouseholdIncome] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [spmSubjects, setSpmSubjects] = useState('');
  const [spmGrades, setSpmGrades] = useState('');
  const [stpmYear, setStpmYear] = useState('');
  const [stpmSubjects, setStpmSubjects] = useState('');
  const [stpmGrades, setStpmGrades] = useState('');
  const [currentStatus, setCurrentStatus] = useState('');
  const [picture1,setPicture1] = useState("")
  const [picture2,setPicture2] = useState("")
  const [modal1, setModal1] = useState(false); // For photo 1
  const [modal2, setModal2] = useState(false);
  const handleSubmit = () => {
    console.log({
      name,
      age,
      nric,
      address,
      schoolName,
      parentType,
      householdIncome,
      phoneNumber,
      spmSubjects,
      spmGrades,
      stpmYear,
      stpmSubjects,
      stpmGrades,
      currentStatus,
      picture1,
      picture2
    });
    // Add logic for handling form submission (e.g., API call)
  };

  const pickFromGalleryWithPermissions1 = async () => {
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
  
          handleUpload1(newFile);
          setModal1(false);
        }
      } catch (error) {
        console.error(error.message); // handle error
      }
    } else {
      Alert.alert("Permission denied for accessing the gallery");
    }
  };

  const pickFromCameraWithPermissions1 = async () => {
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
    
            handleUpload1(newFile);
            setModal1(false);
          }
        } catch (error) {
          console.error(error.message); // handle error
        }
    } else {
      Alert.alert("Permission denied for accessing the camera");
    }
  };

  const handleUpload1 = (image)=>{
    const data = new FormData()
    data.append('file',image)
    data.append('upload_preset','complaint')
    data.append("cloud_name","daqnlvhjm");
    console.log(image);

    fetch("https://api.cloudinary.com/v1_1/daqnlvhjm/image/upload",{
        method:"post",
        body:data
    }).then(res=>res.json()).
    then(data=>{
        setPicture1(data.url)
        alert("images loaded uploaded")
        setModal1(false)
    }).catch(err=>{
        Alert.alert("error while uploading")
    })
}
  const pickFromGalleryWithPermissions2= async () => {
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
  
          handleUpload2(newFile);
          setModal2(false);
        }
      } catch (error) {
        console.error(error.message); // handle error
      }
    } else {
      Alert.alert("Permission denied for accessing the gallery");
    }
  };

  const pickFromCameraWithPermissions2 = async () => {
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
    
            handleUpload2(newFile);
            setModal2(false);
          }
        } catch (error) {
          console.error(error.message); // handle error
        }
    } else {
      Alert.alert("Permission denied for accessing the camera");
    }
  };

  const handleUpload2 = (image)=>{
    const data = new FormData()
    data.append('file',image)
    data.append('upload_preset','complaint')
    data.append("cloud_name","daqnlvhjm")

    fetch("https://api.cloudinary.com/v1_1/daqnlvhjm/image/upload",{
        method:"post",
        body:data
    }).then(res=>res.json()).
    then(data=>{
        setPicture2(data.url)
        alert("images loaded uploaded")
        setModal2(false)
    }).catch(err=>{
        Alert.alert("error while uploading")
    })
}
  return (
    <ScrollView style={{ padding: 20 }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="NRIC"
        value={nric}
        onChangeText={(text) => setNric(text)}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        multiline
      />
      <TextInput
        placeholder="School Name"
        value={schoolName}
        onChangeText={(text) => setSchoolName(text)}
      />
      <Picker
        selectedValue={parentType}
        onValueChange={(itemValue) => setParentType(itemValue)}
        style={{ backgroundColor: 'white', zIndex: 9999, elevation: 1000, }}

      >
        <Picker.Item label="Select Parent Type" value=""  style={{color:"black",fontSize:15}} />
        <Picker.Item label="Father" value="Father" style={{color:"black",fontSize:15}} />
        <Picker.Item label="Mother" value="Mother" style={{color:"black",fontSize:15}} />
        <Picker.Item label="Guardian" value="Guardian" style={{color:"black",fontSize:15}} />
      </Picker>
      {/* Placeholder income ranges */}
      <Picker
        selectedValue={householdIncome}
        onValueChange={(itemValue) => setHouseholdIncome(itemValue)}
        style={{ backgroundColor: 'white', zIndex: 9999, elevation: 1000, }}
        >
        <Picker.Item label="Select Income Range" value="0-1000" style={{color:"black",fontSize:15}} />
        <Picker.Item label="1001-2000" value="1001-2000" style={{color:"black",fontSize:15}} />
        <Picker.Item label="S2000-5000" value="2000-5000" style={{color:"black",fontSize:15}} />
        <Picker.Item label="50001 & above" value="50001 & above" style={{color:"black",fontSize:15}} />
        {/* Add other income ranges */}
      </Picker>
      <TextInput
        placeholder="Phone number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
        />
      



    <Text>Photo</Text>
    <Button
        title="Upload Image 1"
        onPress={() => setModal1(true)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal1}
        onRequestClose={() => setModal1(false)}
      >
              <View style={styles.modalView}>
                  <View style={styles.modalButtonView}>
                        <Button 
                        //  theme={theme}
                        title='camera'
                        onPress={() =>pickFromCameraWithPermissions1()}>
                                
                        </Button>
                        <Button 
                        //  theme={theme}
                        title=' gallery'
                        onPress={() => pickFromGalleryWithPermissions1()}>
                               
                        </Button>
                  </View>
                <Button 
                 title='cancel'
                 onPress={() => setModal1(false)}>
                        
                </Button>
              </View>
             </Modal>
      {/* SPM Subjects and Grades dropdown */}
      {/* STPM Year dropdown */}
      {/* STPM Subjects and Grades dropdown */}
      {/* Image attachment for STPM result */}
      {/* Current status dropdown */}
      <Text>Spm subjects and grades</Text>
      <Picker
        selectedValue={spmSubjects}
        onValueChange={(itemValue) => setSpmSubjects(itemValue)}
        style={{ backgroundColor: 'white', zIndex: 9999, elevation: 1000, }}
      >
        <Picker.Item label="spm subject and grade" value="" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="Study in University" value="Study in University" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="Working" value="Working" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="Own Business" value="Own Business" style={{color:"black",fontSize:15}}/>
      </Picker>
      <Text>Stpm year</Text>
      <Picker
        selectedValue={stpmYear}
        onValueChange={(itemValue) => setStpmYear(itemValue)}
        style={{ backgroundColor: 'white', zIndex: 9999, elevation: 1000, }}
      >
        <Picker.Item label="stpm year" value="" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="2022" value="2022" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="2023" value="2023" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="2021 " value="2021 " style={{color:"black",fontSize:15}}/>
      </Picker>
      <Text>Stpm subject and result</Text>
      <Picker
        selectedValue={stpmSubjects}
        onValueChange={(itemValue) => setStpmSubjects(itemValue)}
        style={{ backgroundColor: 'white', zIndex: 9999, elevation: 1000, }}
      >
        <Picker.Item label="SStpm subject and result" value="" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="english" value="english" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="tamil" value="tamil" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="Hindi " value="Hindi " style={{color:"black",fontSize:15}}/>
      </Picker>


      <Text>Result Photo</Text>
      <Button
        title="Upload Image 2"
        onPress={() => setModal2(true)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal2}
        onRequestClose={() => setModal2(false)}
      >
              <View style={styles.modalView}>
                  <View style={styles.modalButtonView}>
                        <Button 
                        //  theme={theme}
                        title='camera'
                        onPress={() =>pickFromCameraWithPermissions2()}>
                                
                        </Button>
                        <Button 
                        //  theme={theme}
                        title=' gallery'
                        onPress={() => pickFromGalleryWithPermissions2()}>
                               
                        </Button>
                  </View>
                <Button 
                 title='cancel'
                 onPress={() => setModal2(false)}>
                        
                </Button>
              </View>
             </Modal>






      <Picker
        selectedValue={currentStatus}
        onValueChange={(itemValue) => setCurrentStatus(itemValue)}
        style={{ backgroundColor: 'white', zIndex: 9999, elevation: 1000, }}
      >
        <Picker.Item label="Current Status" value="" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="Study in University" value="Study in University" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="Working" value="Working" style={{color:"black",fontSize:15}}/>
        <Picker.Item label="Own Business" value="Own Business" style={{color:"black",fontSize:15}}/>
      </Picker>

      <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 20 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterAlumini;

const styles=StyleSheet.create({
})