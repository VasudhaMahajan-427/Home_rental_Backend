const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js")
const listingRoutes = require("./routes/listing.js")
const bookingRoutes = require("./routes/booking.js")
const userRoutes = require("./routes/user.js")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/properties", listingRoutes)
app.use("/bookings", bookingRoutes)
app.use("/users", userRoutes)
// app.listen(3001, function(){console.log("Listening on 3001");})

  
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://vasudhaumahajan27:vasu@cluster0.zndoqgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



/* MONGOOSE SETUP */
const PORT = 3001;
// mongoose.connect('mongodb+srv://vasudhaumahajan27:vasu@cluster0.zndoqgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
mongoose.connect('mongodb+srv://vasudhaumahajan27:vasu@cluster0.zndoqgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    dbName: "Dream_Nest",
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
