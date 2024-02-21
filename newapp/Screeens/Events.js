import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Touchable, Button } from 'react-native';
import axios from 'axios';
import localhost from '../Config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../Context';

const Events = () => {
  const [events, setEvents] = useState([]);
  const {user,setuser}=useContext(Context);



  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${localhost}/events/allevents`);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const registereventmethod=(eventid)=>{
    alert(eventid,user.id)
    const register=axios.post(`${localhost}/events/addregisteruser`,{
      "userId":user.id,
      "eventId":eventid
    }).then((res)=>{
      alert("register sucessfully")
    }).catch((e)=>{
      alert("error occured")
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <Text style={styles.eventName}>{item.eventName}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailText}>{item.locationDetail}</Text>
              <Text style={styles.detailText}>{item.timing}</Text>
              <Text style={styles.detailText}>{item.duration}</Text>
              <Text style={styles.detailText}>{item.topic}</Text>
            </View>
            <Text style={styles.adminText}>{`Admin: ${item.siteAdminDetail ? item.siteAdminDetail.name : 'Unknown'}`}</Text>
            <Text style={styles.attendeesText}>{`Attendees: ${item.attendedUsers.length}`}</Text>
            <Button title='Register' onPress={()=>registereventmethod(item._id)}/>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  eventCard: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    backgroundColor: 'white',
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'blue',
  },
  description: {
    marginBottom: 12,
    color: 'black',
  },
  detailsContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  detailText: {
    color: 'black',
  },
  adminText: {
    fontStyle: 'italic',
    color: 'gray',
  },
  attendeesText: {
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Events;