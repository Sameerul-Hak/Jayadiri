import React, { useState } from 'react';
import axios from 'axios';
import "./events.css"
function Events() {
  const [eventData, setEventData] = useState({
    eventName: '',
    locationLat: '',
    locationLon: '',
    locationDetail: '',
    siteAdminDetail: '', // Replace with a valid User ID
    timing: '',
    day: '',
    description: '',
    duration: '',
    topic: '',
    registeredUsers: [],
    attendedUsers: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(eventData);
      const response = await axios.post('http://localhost:5000/events/create', eventData);

      if (response.status === 201) {
        console.log('Event created successfully');
        alert("event created successfully")
        // Optionally, you can redirect the user or perform other actions
      } else {
        console.log('Failed to create event');
        // Handle failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Error creating event:', error);
      // Handle other errors (network issues, etc.)
    }
  };

  return (
    <div>
      <h1>Event Create Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="eventName"
            value={eventData.eventName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Location Latitude:
          <input
            type="text"
            name="locationLat"
            value={eventData.locationLat}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Location Longitude:
          <input
            type="text"
            name="locationLon"
            value={eventData.locationLon}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Location Detail:
          <input
            type="text"
            name="locationDetail"
            value={eventData.locationDetail}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Site Admin Detail:
          <input
            type="text"
            name="siteAdminDetail"
            value={eventData.siteAdminDetail}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Timing:
          <input
            type="text"
            name="timing"
            value={eventData.timing}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Day:
          <input
            type="date"
            name="day"
            value={eventData.day}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={eventData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Duration:
          <input
            type="text"
            name="duration"
            value={eventData.duration}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Topic:
          <input
            type="text"
            name="topic"
            value={eventData.topic}
            onChange={handleChange}
          />
        </label>
        <br />
        
        <br />
        
        <br />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default Events;
