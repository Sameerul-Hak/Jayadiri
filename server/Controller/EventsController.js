const EventModel=require("../Model/EventsModel");

exports.createEvent = async (req, res) => {
    try {
      const eventData = req.body;
      console.log(eventData);
      const newEvent = new EventModel(eventData);
      const savedEvent = await newEvent.save();
      res.status(201).json(savedEvent);
    } catch (error) {
      console.error('Error creating event:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

exports.deleteEvent = async (req, res) => {
  const eventId = req.params.id;
  console.log(eventId);

  try {
    const deletedEvent = await EventModel.findByIdAndDelete(eventId);
    if (!deletedEvent) {
      return res.status(404).json({ message:  'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.allEvents = async (req, res) => {
  try {
    const allEvents = await EventModel.find().populate('siteAdminDetail');
    res.json(allEvents);
  } catch (error) {
    console.error('Error retrieving events:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const eventData = req.body;

  try {
    const updatedEvent = await EventModel.findByIdAndUpdate(eventId, eventData, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(updatedEvent);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.addUser = async (req, res) => {
  const haversine = (lat1, lon1, lat2, lon2) => {
    const R = 6371;  // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;  // Distance in kilometers
    return distance;
  };

  try {
    const { eventId, userId, userLat, userLon } = req.body;
    console.log(userLat,userLon);
    const event = await EventModel.findById(eventId);
    const eventLat = parseFloat(event.locationLat);
    const eventLon = parseFloat(event.locationLon);
    const userLatFloat = parseFloat(userLat);
    const userLonFloat = parseFloat(userLon);
    if (isNaN(eventLat) || isNaN(eventLon) || isNaN(userLatFloat) || isNaN(userLonFloat)) {
      return res.status(400).json({ message: 'Invalid coordinates provided' });
    }

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const distance = haversine(eventLat, eventLon, userLatFloat, userLonFloat);
    const radius = 1;
    console.log(userLat,userLon);
    console.log(`distance ${distance}`);

    if (distance <= radius) {
      // Check if the user is already in attendedUsers
      if(event.attendedUsers.includes(userId))
      {
        return res.json({message:"already"
        })
      }
      if (!event.attendedUsers.includes(userId)) {
        event.attendedUsers.push(userId);

        try {
          const updatedEvent = await event.save();
          res.json({ message: 'User added to attendedUsers successfully', event: updatedEvent });
        } catch (saveError) {
          console.error('Error saving event:', saveError);
          res.status(500).json({ message: 'Error saving event' });
        }
      } else {
        res.status(400).json({ message: 'User is already in attendedUsers for this event' });
      }
    } else {
      res.status(400).json({ message: 'User is not within the specified radius of the event' });
    }
  } catch (error) {
    console.error('Error adding user to event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



exports.addRegisteredUser = async (req, res) => {
  try {
    const { eventId, userId } = req.body;

    const event = await EventModel.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (!event.registeredUsers.includes(userId)) {
      event.registeredUsers.push(userId);
      await event.save();
    }

    res.json({ message: 'User added to registeredUsers successfully', event });
  } catch (error) {
    console.error('Error adding registered user to event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.myevents = async (req, res) => {
  const { userid } = req.body;

  try {
    const userEvents = await EventModel.find({ registeredUsers: userid });

    res.json({events:userEvents});
  } catch (error) {
    console.error('Error retrieving user events:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
