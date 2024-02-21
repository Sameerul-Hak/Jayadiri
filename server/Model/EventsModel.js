const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
    },
    locationLat: {
        type: String,
        required: true,
    },
    locationLon: {
        type: String,
        required: true,
    },
    locationDetail: {
        type: String,
        required: true,
    },
    siteAdminDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    timing: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    registeredUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
    }],
    attendedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
    }],
});

const EventModel = mongoose.model("Event", EventSchema);

module.exports = EventModel;
