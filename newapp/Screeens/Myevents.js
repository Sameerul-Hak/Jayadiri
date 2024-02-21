import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { Context } from '../Context';
import axios from 'axios';
import localhost from '../Config';
import * as Location from 'expo-location';

const Myevents = () => {
  const { user } = useContext(Context);
  const [myevents, setMyevents] = useState([]);
  const [location, setLocation] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(false);

  useEffect(() => {
    axios
      .post(`${localhost}/events/myevents`, { userid: user.id })
      .then((res) => {
        setMyevents(res.data.events);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  const fetchLocation = async (eventid) => {
    try {
      setLoadingLocation(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Location permission denied');
      }
  
      // Use watchPositionAsync to continuously get location updates
      const locationSubscription = await Location.watchPositionAsync(
        { enableHighAccuracy: true, timeInterval: 10, distanceInterval: 0.5 }, // adjust time and distance intervals as needed
        (userLocation) => {
          setLocation(userLocation.coords);
          console.log('Getting user location:', location);
          console.log(userLocation.coords.latitude);       // You can now make the API call with the updated location
          console.log(userLocation.coords.longitude);       // You can now make the API call with the updated location
          axios
            .post(`${localhost}/events/adduser`, {
              userId: user.id,
              eventId: eventid,
              userLon: userLocation.coords.longitude,
              userLat: userLocation.coords.latitude,
            })
            .then((res) => {
              if (res.data.message === 'already') {
                alert("Attendance Already marked");
              } else {
                alert('Attendance marked successfully');
              }
            })
            .catch((e) => {
              alert("You're not within the boundary");
            })
            .finally(() => {
              setLoadingLocation(false);
              // Stop watching for location updates
              locationSubscription.remove();
            });
        }
      );
    } catch (error) {
      console.error('Error getting or posting location:', error);
      setLoadingLocation(false);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Events</Text>
      {myevents.length > 0 ? (
        <FlatList
          data={myevents}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.eventContainer}>
              <Text style={styles.eventName}>{item.eventName}</Text>
              <Text>{item.description}</Text>
              <Text>{item.locationDetail}</Text>
              <Text>{item.timing}</Text>
              <Text>{item.duration}</Text>
              <Text>{item.topic}</Text>
              <Text>{item.attendedUsers.length} Attendees</Text>
              <Button title="Request attendance" onPress={() => fetchLocation(item._id)} />
            </View>
          )}
          />
      ) : (
        <Text>No events registered yet!</Text>
      )}
      <Text>{loadingLocation && <ActivityIndicator size="small" color="#0000ff" />}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  eventContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 16,
    marginVertical: 8,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'blue',
  },
});

export default Myevents;
