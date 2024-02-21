const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const UserRoute=require("./Routes/UserAuthRoutes.js");
const EventsRoute=require("./Routes/EventsRoutes.js");

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
app.use("/home",UserRoute);
app.use("/events",EventsRoute);

app.get("/",(req,res)=>{
    res.send("hello");
})

// MongoDB connection URL
const MONGO_URL = "mongodb+srv://sameerulhakofficial:giM6IyrtgGxv5wLl@bookstore.dxckmpm.mongodb.net/bookstore?retryWrites=true&w=majority";
const PORT = 5000;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
}).catch((err) => {
    console.error(`MongoDB connection error: ${err}`);
});