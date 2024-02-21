const express=require("express");
const router=express.Router()

const { createEvent, deleteEvent, updateEvent, allEvents, addUser, addRegisteredUser, myevents } = require("../Controller/EventsController.js");


router.post("/create",createEvent)
router.get("/delete/?id",deleteEvent)
router.post("/update",updateEvent)
router.get("/allevents",allEvents)
router.post("/adduser",addUser)
router.post("/addregisteruser",addRegisteredUser)
router.post("/myevents",myevents)

module.exports= router;